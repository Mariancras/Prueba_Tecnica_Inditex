Feature: Automatic Search on Google
As a web user, I want to search on Google to resolve my doubts.

@google @search
Scenario: Search the word "automatización" in Google
Given I searched on Google for the word "automatización"
When I click on the Wikipedia result
Then it should redirect me to the wikipedia automation result

@search @wikipedia
Scenario: I am looking for the year in which the first automation was carried out
Given I am in the wikipedia automation result
When I look for the year in which the first automatic process was carried out
Then it should show me the year in which the first automation was carried out


#Esta automatización se podría realizar en un solo escenario (ver ejemplos inferiores), ya que es simple
#y conforma un único flujo de proceso, pero se optó por desarmarla en dos escenarios
#evitando el uso del And para mayor expresividad y buenas practicas.
#Ambos escenarios son independientes y mantienen el aislamiento de prueba.


#Ejemplo 1 (muchos And se descarta por buenas practicas)

# @google @search @wikipedia
# Scenario: Check in which year the first automatic process was performed
#     Given I visit the Google home page

#     When I search for the word "automatización" 
#     And I click the Wikipedia result 

#     Then I should redirected to the Wikipedia page
#     And I can check in which year the first automatic process was performed
#     And a screenshot of the paragraph is saved


#Ejemplo 2 (se desestimo por tener instrucciones muy condensadas)

# @google @search @wikipedia
# Scenario: Check in which year the first automatic process was performed
#     Given I entered the result "automatizacion" from Wikipedia after searching for it on Google

#     When I check in which year the first automatic process was performed

#     Then a screenshot of the paragraph is saved