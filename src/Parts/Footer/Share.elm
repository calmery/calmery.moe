module Parts.Footer.Share exposing (view)

import Html exposing (Html, a, div, text)
import Html.Attributes exposing (class, href)
import Model exposing (Model)
import Msg exposing (Msg)
import Parts.Footer.TweetButton as TweetButton
import Route exposing (Route(..))
import Url exposing (percentEncode)


view : Model -> Html Msg
view model =
    div
        []
        [ tweetButton model
        ]


tweetButton : Model -> Html Msg
tweetButton model =
    let
        defaultUrl =
            "https://calmery.moe"

        defaultText =
            "Calmery.moe"

        shareUrl =
            percentEncode
                (case model.route of
                    Just (Entry url) ->
                        if model.entry.isFetching then
                            defaultUrl

                        else
                            "https://calmery.moe/#/entry/" ++ url

                    _ ->
                        defaultUrl
                )

        shareText =
            percentEncode
                (case model.route of
                    Just (Entry url) ->
                        if model.entry.isFetching then
                            defaultText

                        else
                            case model.entry.data of
                                Just data ->
                                    data.title ++ " - " ++ defaultText

                                Nothing ->
                                    defaultText

                    _ ->
                        defaultText
                )
    in
    div [ class "tweet-button" ]
        [ a [ href ("https://twitter.com/intent/tweet?url=" ++ shareUrl ++ "&text=" ++ shareText) ]
            [ TweetButton.view
            ]
        ]
