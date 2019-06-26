<?php


namespace Core;


class Template implements TemplateInterface
{
    const TEMPLATE_FOLDER = "App/Template/";
    const TEMPLATE_EXTENSION = ".php";

    /**
     * @param string $templateName
     * @param null $data
     */
    public function render(string $templateName, $data = null): void
    {
        require_once self::TEMPLATE_FOLDER . $templateName . self::TEMPLATE_EXTENSION;
    }
}
