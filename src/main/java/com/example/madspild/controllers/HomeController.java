package com.example.madspild.controllers;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class HomeController {


    @GetMapping("/")
    public String index(){
        return "home/index";
    }

    @GetMapping("/about")
    public String about() {
        return "home/about";
    }

    @GetMapping("/commercial")
    public String commercial() {
        return "home/commercial";
    }

    @GetMapping("/household")
    public String household() {
        return "home/household";
    }

    @GetMapping("/contact")
    public String contact() {
        return "home/contact";
    }


}
