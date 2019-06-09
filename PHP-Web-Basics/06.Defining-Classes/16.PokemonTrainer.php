<?php

class Trainer
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var int
     */
    private $badges;

    /**
     * @var Pokemon
     */
    private $pokemons;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->badges = 0;
        $this->pokemons = [];
    }

    public function catchPokemon(Pokemon $pokemon): void
    {
        $this->pokemons[$pokemon->getElement()][] = $pokemon;
    }

    public function receiveBadge(): void
    {
        $this->badges++;
    }

    public function hasPokemonByElement(string $element): bool
    {
        return key_exists($element, $this->pokemons) && count($this->pokemons[$element]) > 0;
    }

    public function hitPokemons(int $damage): void
    {
        foreach ($this->pokemons as $type => $pokemonsByType) {
            foreach ($pokemonsByType as $key => $pokemon) {
                $pokemon->hit($damage);
                if (!$pokemon->isAlive()) {
                    unset($this->pokemons[$type][$key]);
                }
            }
        }
    }

    public function getBadges(): int
    {
        return $this->badges;
    }

    public function __toString()
    {
        $pokemonCount = 0;
        foreach ($this->pokemons as $pokemonsByType) {
            $pokemonCount += count($pokemonsByType);
        }
        return $this->name . " " . $this->badges . " " . $pokemonCount;
    }
}

class Pokemon
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $element;

    /**
     * @var
     */
    private $health;

    /**
     * Pokemon constructor.
     * @param string $name
     * @param string $element
     * @param $health
     */
    public function __construct(string $name, string $element, $health)
    {
        $this->name = $name;
        $this->element = $element;
        $this->health = $health;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getElement(): string
    {
        return $this->element;
    }

    /**
     * @return mixed
     */
    public function getHealth()
    {
        return $this->health;
    }

    public function isAlive(): bool
    {
        return $this->getHealth() > 0;
    }

    public function hit(int $damage): void
    {
        $this->health -= max(0, $damage);
    }
}

/**
 * @var Trainer[] $trainers
 */
$trainers = [];
$input = readline();

while ($input != "Tournament") {
    list($trainerName, $pokemonName, $element, $health,) = explode(" ", $input);
    if (!key_exists($trainerName, $trainers)) {
        $trainers[$trainerName] = new Trainer($trainerName);
    }
    $trainer = $trainers[$trainerName];
    $trainer->catchPokemon(new Pokemon($pokemonName, $element, $health));
    $input = readline();
}

$input = readline();

while ($input != "End") {
    foreach ($trainers as $trainer) {
        if ($trainer->hasPokemonByElement($input)) {
            $trainer->receiveBadge();
        } else {
            $trainer->hitPokemons(10);
        }
    }
    $input = readline();
}

uksort($trainers, function ($key1, $key2) use ($trainers) {
    $trainer1 = $trainers[$key1];
    $trainer2 = $trainers[$key2];

    return $trainer2->getBadges() <=> $trainer1->getBadges();
});

echo implode("\n", $trainers);