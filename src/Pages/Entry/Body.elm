module Pages.Entry.Body exposing (view)

import Html exposing (Html, a, div, img, p, text)
import Html.Attributes exposing (alt, class, href, id, src, style)
import Markdown
import Model exposing (Attachment, Entry)
import Msg exposing (Msg)


view : Entry -> Html Msg
view entry =
    div
        []
        [ Markdown.toHtml [ id "body" ] entry.body
        , attachmentsView entry.attachments
        ]


attachmentsView : List Attachment -> Html Msg
attachmentsView attachments =
    div [ id "attachments" ] (List.map attachmentView attachments)


linkWrap : String -> Html Msg -> Html Msg
linkWrap url html =
    a [ href url ] [ html ]


attachmentView : Attachment -> Html Msg
attachmentView attachment =
    let
        content =
            div
                [ class "attachment" ]
                [ div
                    [ class "attachment-title-and-link" ]
                    [ p
                        [ class "attachment-title" ]
                        [ text attachment.title ]
                    , img
                        [ src "assets/link.svg", alt "リンク" ]
                        []
                    ]
                , div
                    [ class "attachment-image"
                    , style "background" ("url(" ++ attachment.thumbnail ++ ") center / cover")
                    ]
                    []
                ]
    in
    case attachment.url of
        Just url ->
            linkWrap url content

        Nothing ->
            content
