Feature: Test Ebay Page

    @test
    Scenario: Visit Ebay Home Page And Validate Search Result
        Given User Visits Ebay Home Page
        When User Fills Search Criteria With Text "ToolKit"
        And User Clicks On "Search" Button
        Then User Should Validate The Search Results
