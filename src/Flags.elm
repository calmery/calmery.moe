module Flags exposing (decodeFlags)

import Data.EnvironmentVariables exposing (EnvironmentVariables, parse)


decodeFlags : String -> EnvironmentVariables
decodeFlags =
    parse
