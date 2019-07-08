module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, a, div, h1, header, img, node, p, text)
import Html.Attributes exposing (alt, class, href, id, src)
import Model exposing (Model)
import Msg exposing (Msg(..))
import Pages.Entry as EntryPage
import Pages.NotFound as NotFoundPage
import Pages.Top as TopPage
import Parts.Footer as Footer
import Route exposing (Route(..))


view : Model -> Document Msg
view model =
    { title = "Calmery.moe"
    , body =
        [ node "main"
            []
            [ div
                [ id "container" ]
                [ viewPage model
                , Footer.view model
                ]
            ]
        ]
    }


viewPage : Model -> Html Msg
viewPage model =
    case model.route of
        Just location ->
            case location of
                Top ->
                    TopPage.view model

                Entry _ ->
                    EntryPage.view model

        Nothing ->
            NotFoundPage.view True
