package com.wafflemkr.fusc.cucumber.stepdefs;

import com.wafflemkr.fusc.FusconeApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = FusconeApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
