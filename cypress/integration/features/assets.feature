Feature: Assets Page

I want to open Assets Page

Scenario: opening Assets Page

Given opening Assets Page
Then title should be 'Assets Page'


Given table is displayed
Then should display assets list

When 'Ticker' is clicked

When 'Price' is clicked

When 'Asset Type' is clicked

Given Asset is Equities
When equities background-color should be 'rgb(0, 191, 255)'
Then equities color should be 'rgb(255, 255, 255)'

Given Asset is Macro
When macro background-color should be 'rgb(50, 205, 50)'
Then macro color should be 'rgb(255, 255, 255)'

Given Asset is Credit
When credit background-color should be 'rgb(255, 255, 255)'
Then credit color should be 'rgb(0, 0, 0)'

