<?php
$quests = explode(", ", readline());

$sideQuest = [];
while (true) {
    $input = readline();

    if ($input === "Retire!") {
        break;
    }

    $args = explode(" - ", $input);
    $command = $args[0];
    $quest = $args[1];

    switch ($command) {
        case "Start":
            $index = array_search($quest, $quests);
            if ($index === false) {
                $quests[] = $quest;
            }
            break;
        case "Complete":
            $index = array_search($quest, $quests);
            if ($index !== false) {
                array_splice($quests, $index, 1);
            }
            break;
        case "Renew":
            $index = array_search($quest, $quests);
            if ($index !== false) {
                array_splice($quests, $index, 1);
                $quests[] = $quest;
            }
            break;
        case "Side Quest":
            $tokens = explode(":", $quest);
            $main = $tokens[0];
            $side = $tokens[1];

            $index = array_search($main, $quests);
            $mainIndex = array_search($main, $sideQuest);

            if ($index !== false) {
                if (isset($quests[$index + 1])) {
                    if ($quests[$index + 1] !== $side && $mainIndex === false) {
                        $sideQuest[] = $main;
                        array_splice($quests, $index + 1, 0, $side);
                    }
                } else {
                    $sideQuest[] = $main;
                    array_splice($quests, $index + 1, 0, $side);
                }
            }
            break;
    }
}
echo implode(", ", $quests);