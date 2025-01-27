Feature: Vérifier la page de connexion

  Scenario: Connexion avec des identifiants valides
    Given L utilisateur est sur la page d accueil d OrangeHRM
    When L utilisateur saisit un email et un mot de passe valides
    When Clique sur le bouton de connexion
    Then La page du tableau de bord s affiche avec succès
