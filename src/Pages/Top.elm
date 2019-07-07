module Pages.Top exposing (view)

import Html exposing (Html, div, text)
import Model exposing (Model)
import Pages.Top.Articles as Articles
import Pages.Top.Header as Header


view model =
    div []
        [ Header.view model
        , Articles.view model
        ]
