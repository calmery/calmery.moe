module Data.Profile.Fetch exposing (fetchProfile)

import Http exposing (getString, send)
import Msg exposing (Msg(..))


fetchProfile : Cmd Msg
fetchProfile =
    "/assets/profile.yml"
        |> getString
        |> send UpdateProfile
