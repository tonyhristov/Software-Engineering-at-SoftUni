<?php

$keyMaterials = [];
$junk = [];
$win = "";
$getMaterial = true;
$keyMaterials['motes'] = 0;
$keyMaterials['shards'] = 0;
$keyMaterials['fragments'] = 0;

while ($getMaterial) {
    $input = readline();
    $tokens = explode(" ", $input);
    $qty = 0;
    $material = "";
    $count = count($tokens);

    for ($i = 1; $i <= $count; $i += 2) {
        $qty = intval($tokens[$i - 1]);
        $material = strtolower($tokens[$i]);

        if (key_exists($material, $keyMaterials)) {
            $keyMaterials[$material] += $qty;

            if ($keyMaterials[$material] >= 250 && ($material === "fragments" || $material === "shards" || $material === "motes")) {
                $win = $material;
                $keyMaterials[$material] -= 250;
                $getMaterial = false;
                break;
            }
        } else {
            if (!key_exists($material, $junk)) {
                $junk[$material] = $qty;
            } else {
                $junk[$material] += $qty;
            }
        }
    }
}

if ($win === "shards") {
    echo "Shadowmourne obtained!\n";
} else if ($win === "motes") {
    echo "Dragonwrath obtained!\n";
} else if ($win === "fragments") {
    echo "Valanyr obtained!\n";
}

uksort($keyMaterials, function ($mat1, $mat2) use ($keyMaterials) {
    $count1 = $keyMaterials[$mat1];
    $count2 = $keyMaterials[$mat2];
    if ($count1 === $count2) {
        $name1 = $mat1;
        $name2 = $mat2;
        return $name1 <=> $name2;
    }
    return $count2 <=> $count1;
});

uksort($junk, function ($junk1, $junk2) use ($junk) {
    $name1 = $junk1;
    $name2 = $junk2;
    return $name1 <=> $name2;
});

foreach ($keyMaterials as $key => $value) {
    echo "$key" . ": " . $value . PHP_EOL;
}

foreach ($junk as $key => $value) {
    echo "$key" . ": " . $value . PHP_EOL;
}