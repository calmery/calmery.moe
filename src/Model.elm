module Model exposing (Model, initialModel)

import Browser.Navigation exposing (Key)
import Data.EnvironmentVariables exposing (EnvironmentVariables)
import Route exposing (Route)


initialModel : EnvironmentVariables -> Key -> Maybe Route -> Model
initialModel environmentVariables key route =
    { environmentVariables = environmentVariables
    , key = key
    , route = route
    }


type alias Model =
    { environmentVariables : EnvironmentVariables
    , key : Key
    , route : Maybe Route
    }
