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


attachmentView : Attachment -> Html Msg
attachmentView attachment =
    a [ href attachment.url ]
        [ div
            [ class "attachment" ]
            [ p [ class "attachment-title" ] [ text attachment.title ]
            , div [ class "attachment-image", style "background" ("url(" ++ attachment.thumbnail ++ ") center / cover") ] []
            ]
        ]
