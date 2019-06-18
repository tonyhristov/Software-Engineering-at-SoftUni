<?php


class SmartPhone implements Call, Browse
{

    /**
     * @param string $phoneNumber
     * @return string
     * @throws Exception
     */
    public function call(string $phoneNumber): string
    {
        if (preg_match("/[^0-9]+/", $phoneNumber)) {
            throw new Exception("Invalid number!\n");
        }
        return "Calling... $phoneNumber\n";
    }

    /**
     * @param string $url
     * @return string
     * @throws Exception
     */
    public function browse(string $url): string
    {
        if (preg_match("/[0-9]/", $url)) {
            throw new Exception("Invalid URL!\n");
        }
        return "Browsing: $url!\n";
    }
}
