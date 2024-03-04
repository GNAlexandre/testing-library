import {render, screen, waitFor} from "@testing-library/react";
import * as React from "react";
import App from "app";
import userEvent from "@testing-library/user-event";
import {submitForm} from "api";

jest.mock('../api', () => ({
    submitForm: jest.fn().mockResolvedValue({ data: 'response data' }),
}));

beforeEach(() => {
    submitForm.mockResolvedValue({ message: 'Form submitted succesfully' })
})

//Premier scénario : cas passant
describe('Premier scénario : cas passant', async () => {

//L'utilisateur est sur la Home
    test('L\'utilisateur est sur la Home', () => {
        render(<App />)
        expect(screen.getByRole('heading')).toHaveTextContent("Welcome home")
    })



//Vérifie la présence d'un titre "Welcome home" est présent dans le document
    test('Vérifie la présence d\'un titre "Welcome home" est présent dans le document', () => {
        render(<App />)
        expect(screen.getByRole('heading')).toHaveTextContent("Welcome home")

    })

//Un lien "Fill out the form" est dans le document
    test('Un lien "Fill out the form" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: "Fill out the form"}))

    })

//L'utilisateur clique sur le lien
    test('L\'utilisateur clique sur le lien', () => {
        render(<App />)
        userEvent.click(screen.getByRole('link'))


    })

//L'utilisateur est redirigé sur la page 1
    test('L\'utilisateur est redirigé sur la page 1', () => {
        render(<App />)
        expect(window.location.pathname).toBe("/page-1")
    })



//L'utilisateur est sur la page 1
    test('L\'utilisateur est sur la page 1', () => {
        render(<App />)
        expect(screen.getByRole('heading')).toHaveTextContent("Page 1")
    })

//un lien "Go home" est dans le document
    test('un lien "Go home" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: "Go Home"}))
    })

//Un champ avec le label "Favorite food" est dans le document
    test('Un champ avec le label "Favorite food" est dans le document', () => {
        render(<App />)
        expect(screen.getByLabelText("Favorite Food"))

    })

//l'utilisateur rempli le champ avec "Les pâtes"
    test('l\'utilisateur rempli le champ avec "Les pâtes"', () => {
        render(<App />)
        expect(screen.getByLabelText("Favorite Food")).toHaveValue("")
        screen.getByLabelText("Favorite Food").value = "Les pâtes"
        expect(screen.getByLabelText("Favorite Food")).toHaveValue("Les pâtes")
    })

//un lien "Next" est dans le document
    test('un lien "Next" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: "Next"}))
    })

// l'utilisateur clique sur le lien "Next"
    test('l\'utilisateur clique sur le lien "Next"', () => {
        render(<App />)
        userEvent.click(screen.getByRole('link', {name: "Next"}))
    })

//l'utilisateur est redirigé sur la page 2
    test('l\'utilisateur est redirigé sur la page 2', () => {
        render(<App />)
        expect(window.location.pathname).toBe("/page-2")
    })

//L'utilisateur est sur la page 2
    test('L\'utilisateur est sur la page 2', () => {
        render(<App />)
        expect(screen.getByRole('heading')).toHaveTextContent("Page 2")
    })

//un lien "Go back" est dans le document
    test('un lien "Go back" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: "Go Back"}))
    })

//Un champ avec le label "Favorite drink" est dans le document
    test('Un champ avec le label "Favorite drink" est dans le document', () => {
        render(<App />)
        expect(screen.getByLabelText("Favorite Drink"))

    })

//l'utilisateur rempli le champ avec "Bière"
    test('l\'utilisateur rempli le champ avec "Bière"', () => {
        render(<App />)
        expect(screen.getByLabelText("Favorite Drink")).toHaveValue("")
        screen.getByLabelText("Favorite Drink").value = "Bière"
        expect(screen.getByLabelText("Favorite Drink")).toHaveValue("Bière")
    })

//Un lien Review est dans le document
    test('Un lien Review est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: "Review"}))
    })

// l'utilisateur est redirigé sur la page de confirmation
    test('l\'utilisateur est redirigé sur la page de confirmation', () => {
        render(<App />)
        userEvent.click(screen.getByRole('link', {name: "Review"}))
    })

//Un titre "Confirm" est dans le document
    test('Un titre "Confirm" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('heading')).toHaveTextContent("Confirm")
    })

//Un texte "Please confirm your choices" est dans le document
    test('Un texte "Please confirm your choices" est dans le document', () => {
        render(<App />)
        expect(screen.getByText("Please confirm your choices"))

    })

//Un texte label "favorite food" a pour contenu "Les pâtes"
    test('Un texte label "favorite food" a pour contenu "Les pâtes"', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByLabelText("Favorite Food")).toHaveTextContent("Les pâtes"))
    })

//Un texte label "favorite drink" a pour contenu "Bière"
    test('Un texte label "favorite drink" a pour contenu "Bière"', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByLabelText("Favorite Drink")).toHaveTextContent("Bière"))

    })

//un lien "Go back" est dans le document
    test('un lien "Go back" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('link', {name: "Go Back"}))
    })

//un bouton "Confirm" est dans le document
    test('un bouton "Confirm" est dans le document', () => {
        render(<App />)
        expect(screen.getByRole('button', {name: "Confirm"}))
    })

//l'utilisateur clique sur le bouton "Confirm"
    test('l\'utilisateur clique sur le bouton "Confirm"', () => {
        render(<App />)
        userEvent.click(screen.getByRole('button', {name: "Confirm"}))

    })

//l'utilisateur est redirigé sur la page de Félicitation
    test('l\'utilisateur est redirigé sur la page de Félicitation', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/success"))

    })

//Un titre "Congrats.You did it." est dans le document
    test('Un titre "Congrats.You did it." est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Congrats.You did it."))
    })

//un lien "Go home" est dans le document
    test('un lien "Go home" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Go home"})).toBeInTheDocument())
    })

//l'utilisateur clique sur le lien "Go home"
    test('l\'utilisateur clique sur le lien "Go home"', async () => {
        render(<App />)
        waitFor(() => userEvent.click(screen.getByRole('link', {name: "Go home"})))
    })

//l'utilisateur est redirigé sur la home page
    test('l\'utilisateur est redirigé sur la home page', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/"))
    })

//Un titre "Welcome home" est dans le document
    test('Un titre "Welcome home" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Welcome home"))
    });
})




//Second scénario : cas non passant
describe('Second scénario : cas non passant', async() => {
    //1 - l'utilisateur est sur la Home
    test('l\'utilisateur est sur la Home', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/"))
    })
    //2 - Un titre "Welcome home" est dans le document
    test('Un titre "Welcome home" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Welcome home"))
    })

    //3 - Un lien "Fill out the form" est dans le document
    test('Un lien "Fill out the form" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Fill out the form"})).toBeInTheDocument())
    })

    //4 - l'utilisateur clique sur le lien
    test('l\'utilisateur clique sur le lien', async () => {
        render(<App />)
        waitFor(() => userEvent.click(screen.getByRole('link', {name: "Fill out the form"})))
    })

    //5 - l'utilisateur est redirigé sur la page 1
    test('l\'utilisateur est redirigé sur la page 1', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/page1"))
    })

    //6 - Un titre "Page 1" est dans le document
    test('Un titre "Page 1" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Page 1"))
    })

    //7 - un lien "Go home" est dans le document
    test('un lien "Go home" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Go home"})).toBeInTheDocument())
    })

    //8 - Un champ avec le label "Favorite food" est dans le document
    test('Un champ avec le label "Favorite food" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByLabelText("Favorite Food")).toBeInTheDocument())
    })

    //9 - l'utilisateur rempli le champ avec ""
    test('l\'utilisateur rempli le champ avec ""', async () => {
        render(<App />)
        waitFor(() => userEvent.type(screen.getByLabelText("Favorite Food"), ""))
    })

    //10 - un lien "Next" est dans le document
    test('un lien "Next" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Next"})).toBeInTheDocument())
    })

    //11 - l'utilisateur clique sur le lien "Next"
    test('l\'utilisateur clique sur le lien "Next"', async () => {
        render(<App />)
        waitFor(() => userEvent.click(screen.getByRole('link', {name: "Next"})))
    })

    //12- l'utilisateur est redirigé sur la page 2
    test('l\'utilisateur est redirigé sur la page 2', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/page2"))
    })

    //13 - Un titre "Page 2" est dans le document
    test('Un titre "Page 2" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Page 2"))
    })

    //14 - un lien "Go back" est dans le document
    test('un lien "Go back" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Go back"})).toBeInTheDocument())
    })


    //15 - Un champ avec le label "Favorite drink" est dans le document
    test('Un champ avec le label "Favorite drink" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByLabelText("Favorite Drink")).toBeInTheDocument())
    })

    //16 - l'utilisateur rempli le champ avec "Bière"
    test('l\'utilisateur rempli le champ avec "Bière"', async () => {
        render(<App />)
        waitFor(() => userEvent.type(screen.getByLabelText("Favorite Drink"), "Bière"))
    })

    //17 - un lien "Review" est dans document
    test('un lien "Review" est dans document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Review"})).toBeInTheDocument())
    })

    //18 - l'utilisateur clique sur le lien 'Review'
    test('l\'utilisateur clique sur le lien "Review"', async () => {
        render(<App />)
        waitFor(() => userEvent.click(screen.getByRole('link', {name: "Review"})))
    })

    //19 - l'utilisateur est redirigé sur la page de confirmation
    test('l\'utilisateur est redirigé sur la page de confirmation', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/confirm"))
    })

    //20 - Un titre "Confirm" est dans le document
    test('Un titre "Confirm" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Confirm"))
    })

    //21 - Un texte "Please confirm your choices" est dans le document
    test('Un texte "Please confirm your choices" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByText("Please confirm your choices")).toBeInTheDocument())
    })

    //22 - Un texte label "favorite food" a pour contenu ""
    test('Un texte label "favorite food" a pour contenu ""', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByLabelText("Favorite Food")).toHaveTextContent(""))
    })

    //23 - Un texte label "favorite drink" a pour contenu "Bière"
    test('Un texte label "favorite drink" a pour contenu "Bière"', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByLabelText("Favorite Drink")).toHaveTextContent("Bière"))
    })

    //24 - un lien "Go back" est dans le document
    test('un lien "Go back" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Go back"})).toBeInTheDocument())
    })

    //25 - un bouton "Confirm" est dans le document
    test('un bouton "Confirm" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('button', {name: "Confirm"})).toBeInTheDocument())
    })

    //26 - l'utilisateur clique sur le bouton "Confirm"
    test('l\'utilisateur clique sur le bouton "Confirm"', async () => {
        render(<App />)
        waitFor(() => userEvent.click(screen.getByRole('button', {name: "Confirm"})))
    })

    //27 - l'utilisateur est redirigé sur la page d'erreur
    test('l\'utilisateur est redirigé sur la page d\'erreur', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/error"))
    })

    //28 - Un texte "Oh no. There was an error." est dans le document
    test('Un texte "Oh no. There was an error." est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByText("Oh no. There was an error.")).toBeInTheDocument())
    })

    //29 - Un texte "les champs food et drink sont obligatoires" est dans le document
    test('Un texte "les champs food et drink sont obligatoires" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByText("les champs food et drink sont obligatoires")).toBeInTheDocument())
    })

    //30 - un lien "Go home" est dans le document
    test('un lien "Go home" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Go home"})).toBeInTheDocument())
    })

    //31 - un lien "Try again" est dans le document
    test('un lien "Try again" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('link', {name: "Try again"})).toBeInTheDocument())
    })

    //32 - l'utilisateur clique sur le lien "Try again"
    test('l\'utilisateur clique sur le lien "Try again"', async () => {
        render(<App />)
        waitFor(() => userEvent.click(screen.getByRole('link', {name: "Try again"})))
    })

    //33 - l'utilisateur est redirigé sur la page 1
    test('l\'utilisateur est redirigé sur la page 1', async () => {
        render(<App />)
        waitFor(() => expect(window.location.pathname).toBe("/page1"))
    })

    //34 - Un titre "Page 1" est dans le document
    test('Un titre "Page 1" est dans le document', async () => {
        render(<App />)
        waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent("Page 1"))
    })
})