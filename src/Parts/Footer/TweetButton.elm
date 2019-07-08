module Parts.Footer.TweetButton exposing (view)

import Html exposing (Html)
import Msg exposing (Msg)
import Svg exposing (path, rect, svg, text)
import Svg.Attributes exposing (class, d, fill, height, rx, viewBox, width)



-- HTML 要素として記述していたが Audits の Accessibility で文字の視認性が悪いと怒られていた
-- そのため SVG にして対処する


view : Html Msg
view =
    svg [ class "tweet-button", fill "none", height "20", viewBox "0 0 60 20", width "60" ]
        [ rect
            [ fill "#1B95E0", height "20", rx "3", width "60" ]
            []
        , path
            [ d "M24.497 7.598V14H26.224V7.598H28.578V6.146H22.143V7.598H24.497ZM34.595 14L36.388 8.313H34.782L33.737 12.163H33.715L32.747 8.313H31.229L30.283 12.174H30.261L29.216 8.313H27.566L29.37 14H30.987L31.955 10.183H31.977L32.989 14H34.595ZM40.881 10.546H38.34C38.3473 10.436 38.3693 10.3113 38.406 10.172C38.45 10.0327 38.5197 9.90067 38.615 9.776C38.7177 9.65133 38.8497 9.54867 39.011 9.468C39.1797 9.38 39.3887 9.336 39.638 9.336C40.0193 9.336 40.3017 9.43867 40.485 9.644C40.6757 9.84933 40.8077 10.15 40.881 10.546ZM38.34 11.536H42.443C42.4723 11.096 42.4357 10.6743 42.333 10.271C42.2303 9.86767 42.0617 9.50833 41.827 9.193C41.5997 8.87767 41.3063 8.62833 40.947 8.445C40.5877 8.25433 40.166 8.159 39.682 8.159C39.2493 8.159 38.8533 8.236 38.494 8.39C38.142 8.544 37.8377 8.75667 37.581 9.028C37.3243 9.292 37.1263 9.60733 36.987 9.974C36.8477 10.3407 36.778 10.7367 36.778 11.162C36.778 11.602 36.844 12.0053 36.976 12.372C37.1153 12.7387 37.3097 13.054 37.559 13.318C37.8083 13.582 38.1127 13.7873 38.472 13.934C38.8313 14.0733 39.2347 14.143 39.682 14.143C40.3273 14.143 40.8773 13.9963 41.332 13.703C41.7867 13.4097 42.124 12.922 42.344 12.24H40.969C40.9177 12.416 40.7783 12.5847 40.551 12.746C40.3237 12.9 40.0523 12.977 39.737 12.977C39.297 12.977 38.9597 12.8633 38.725 12.636C38.4903 12.4087 38.362 12.042 38.34 11.536ZM47.1974 10.546H44.6564C44.6637 10.436 44.6857 10.3113 44.7224 10.172C44.7664 10.0327 44.8361 9.90067 44.9314 9.776C45.0341 9.65133 45.1661 9.54867 45.3274 9.468C45.4961 9.38 45.7051 9.336 45.9544 9.336C46.3357 9.336 46.6181 9.43867 46.8014 9.644C46.9921 9.84933 47.1241 10.15 47.1974 10.546ZM44.6564 11.536H48.7594C48.7887 11.096 48.7521 10.6743 48.6494 10.271C48.5467 9.86767 48.3781 9.50833 48.1434 9.193C47.9161 8.87767 47.6227 8.62833 47.2634 8.445C46.9041 8.25433 46.4824 8.159 45.9984 8.159C45.5657 8.159 45.1697 8.236 44.8104 8.39C44.4584 8.544 44.1541 8.75667 43.8974 9.028C43.6407 9.292 43.4427 9.60733 43.3034 9.974C43.1641 10.3407 43.0944 10.7367 43.0944 11.162C43.0944 11.602 43.1604 12.0053 43.2924 12.372C43.4317 12.7387 43.6261 13.054 43.8754 13.318C44.1247 13.582 44.4291 13.7873 44.7884 13.934C45.1477 14.0733 45.5511 14.143 45.9984 14.143C46.6437 14.143 47.1937 13.9963 47.6484 13.703C48.1031 13.4097 48.4404 12.922 48.6604 12.24H47.2854C47.2341 12.416 47.0947 12.5847 46.8674 12.746C46.6401 12.9 46.3687 12.977 46.0534 12.977C45.6134 12.977 45.2761 12.8633 45.0414 12.636C44.8067 12.4087 44.6784 12.042 44.6564 11.536ZM51.6658 8.313V6.608H50.1038V8.313H49.1578V9.358H50.1038V12.713C50.1038 12.999 50.1515 13.23 50.2468 13.406C50.3421 13.582 50.4705 13.7177 50.6318 13.813C50.8005 13.9083 50.9911 13.9707 51.2038 14C51.4238 14.0367 51.6548 14.055 51.8968 14.055C52.0508 14.055 52.2085 14.0513 52.3698 14.044C52.5311 14.0367 52.6778 14.022 52.8098 14V12.79C52.7365 12.8047 52.6595 12.8157 52.5788 12.823C52.4981 12.8303 52.4138 12.834 52.3258 12.834C52.0618 12.834 51.8858 12.79 51.7978 12.702C51.7098 12.614 51.6658 12.438 51.6658 12.174V9.358H52.8098V8.313H51.6658Z"
            , fill "white"
            ]
            [ -- これがないと Audits で a の中に表示する文字がないと怒られる
              text "Tweet"
            ]
        , path
            [ d "M19.3801 5.94389C18.9236 6.14611 18.4332 6.283 17.9179 6.34444C18.4437 6.02944 18.8473 5.5305 19.0373 4.93608C18.5454 5.22775 18.0009 5.44008 17.4207 5.55364C16.957 5.05917 16.2955 4.75 15.5632 4.75C14.1573 4.75 13.0175 5.88944 13.0175 7.29586C13.0175 7.49536 13.0405 7.68864 13.0832 7.87531C10.9667 7.76914 9.09167 6.75628 7.83556 5.21589C7.61681 5.59233 7.4914 6.02944 7.4914 6.49533C7.4914 7.37869 7.94095 8.15822 8.62384 8.61478C8.20656 8.60117 7.81398 8.48683 7.47078 8.29589C7.4704 8.30678 7.4704 8.31728 7.4704 8.32758C7.4704 9.56133 8.34792 10.5905 9.51284 10.8242C9.29895 10.8822 9.07417 10.9131 8.84201 10.9131C8.6777 10.9131 8.51806 10.8979 8.3629 10.8684C8.68703 11.8795 9.62678 12.6155 10.741 12.6359C9.86945 13.3184 8.77123 13.7258 7.57928 13.7258C7.37415 13.7258 7.17173 13.7141 6.97223 13.69C8.09884 14.4127 9.43701 14.8337 10.8741 14.8337C15.557 14.8337 18.1172 10.9545 18.1172 7.59064C18.1172 7.48078 18.1147 7.37033 18.1098 7.26144C18.6072 6.90231 19.0389 6.4545 19.3799 5.94428L19.3801 5.94389Z"
            , fill "white"
            ]
            []
        ]