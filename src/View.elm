module View exposing (view)

import Browser exposing (Document)
import Html exposing (Html, a, div, h1, p, text)
import Html.Attributes exposing (class, href, id)
import Model exposing (Model)
import Pages.Articles as Articles
import Pages.Goods as Goods
import Pages.Profile as Profile
import Pages.Top as Top
import Route exposing (Route(..))
import Update exposing (Msg(..))


view : Model -> Document Msg
view model =
    { title = "Elm App"
    , body =
        [ div
            [ id "fullPage" ]
            [ section <| Top.view model
            , section <| Profile.view model
            , section <| Articles.view model
            , section <| Goods.view model
            ]
        ]
    }


section : Html Msg -> Html Msg
section html =
    div [ class "section" ]
        [ html ]
