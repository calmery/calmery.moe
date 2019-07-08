module Pages.Entry.Body exposing (view)

import Html exposing (Html, div, p, text)
import Html.Attributes exposing (id)
import Markdown
import Model exposing (Entry)
import Msg exposing (Msg)


view : Entry -> Html Msg
view entry =
    div [ id "body" ]
        [ p
            []
            [ Markdown.toHtml [] entry.body ]
        ]
