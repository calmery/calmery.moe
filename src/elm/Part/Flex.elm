module Part.Flex exposing (flex, flexSpaceBetween)

import Html exposing (Html, div)
import Html.Attributes exposing (class)
import Msg exposing (Msg)


flex : List (Html Msg) -> Html Msg
flex children =
    div [ class "flex" ]
        children


flexSpaceBetween : List (Html Msg) -> Html Msg
flexSpaceBetween children =
    div [ class "flex space-between" ]
        children
