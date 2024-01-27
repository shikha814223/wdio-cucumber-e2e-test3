Feature: Demo feature


    @demo
    Scenario Outline: Run first demo
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpextedURL>

        Examples:
            | testId     | SearchItem | ExpextedURL            |
            | Demo_TC001 | WDIO       | https://webdriver.io/ |
