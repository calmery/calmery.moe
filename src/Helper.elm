module Helper exposing (fetchFromUrlPath, isPageUrl)

import Data.Entry.Fetch exposing (fetchEntry)
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
        Cmd.none

    else if isPageUrl url then
        case
            dropLeft (length "/entry/") url.path
                |> split "/"
                |> head
        of
            Just path ->
                fetchEntry path

            Nothing ->
                Cmd.none

    else
        Cmd.none
