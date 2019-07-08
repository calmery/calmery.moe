module Route exposing (Route(..), parseUrl)

import Url exposing (Url)
import Url.Parser exposing ((</>), Parser, map, oneOf, parse, s, string, top)


parseUrl : Url -> Maybe Route
parseUrl =
    parse route



-- Routing


type Route
    = Top
    | Entry String


route : Parser (Route -> Route) Route
route =
    oneOf
        [ map Top top
        , map Entry (s "entry" </> string)
        ]
