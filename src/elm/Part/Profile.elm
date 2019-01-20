module Part.Profile exposing (viewProfile)

import Html exposing (Html, div, img, text)
import Html.Attributes exposing (class, src)
import Model exposing (Model)
import Msg exposing (Msg)
import Part.Flex exposing (flex)
import Part.Loading exposing (loading)
import Part.NotFound exposing (notFound)


viewProfile : Model -> Html Msg
viewProfile model =
    div [ class "profile" ]
        (if model.profile.isFetching then
            [ loading False ]

         else
            case model.profile.data of
                Just profile ->
                    [ flex
                        [ div [ class "icon" ]
                            [ img [ src profile.icon ] [] ]
                        , div []
                            [ div [ class "name" ] [ text profile.name ]
                            , div [ class "description" ] [ text profile.description ]
                            ]
                        ]
                    ]

                Nothing ->
                    [ notFound False ]
        )
