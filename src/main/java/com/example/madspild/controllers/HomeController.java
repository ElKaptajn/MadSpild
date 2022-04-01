package com.example.madspild.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {


    @GetMapping("/")
    public String index(){
        return "index";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/commercial")
    public String commercial() {
        return "commercial";
    }

    @GetMapping("/household")
    public String household() {
        return "household";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }


}
