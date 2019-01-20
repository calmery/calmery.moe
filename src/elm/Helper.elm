module Helper exposing (fetchFromUrlPath, isPageUrl)

import Data.Page.Fetch exposing (fetchPage)
import List exposing (head)
import Msg exposing (Msg)
import String exposing (dropLeft, length, split, startsWith)
import Url exposing (Url)


isPageUrl : Url -> Bool
isPageUrl url =
    startsWith "/entry/" url.path


fetchFromUrlPath : Url -> Cmd Msg
fetchFromUrlPath url =
    if url.path == "/" then
        fetchPage "index"

    else if isPageUrl url then
        case
            dropLeft (length "/entry/") url.path
                |> split "/"
                |> head
        of
            Just path ->
                fetchPage path

            Nothing ->
                Cmd.none

    else
        Cmd.none
