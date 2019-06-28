<?php


namespace Core;


class Template implements TemplateInterface
{
    const TEMPLATE_FOLDER = "App/Template/";
    const TEMPLATE_EXTENSION = ".php";

    /**
     * @param string $templateName
     * @param null $data
     * @param null $error
     */
    public function render(string $templateName, $data = null, $error = null): void
    {
        require_once self::TEMPLATE_FOLDER . $templateName . self::TEMPLATE_EXTENSION;
    }
}
