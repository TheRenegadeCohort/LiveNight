# Displayables

 denotes backend

() denotes from api

# Splash Page => App.jsx

    <center>
    BG: Concert IMG

    logo
        Live Tonight

    Spotify Login Button
         backend to connect user with spotify api
             once connected,
                redirect to main page
             if failed to connect
                return to App.jsx  // see above

# Main Page => Main.jsx

    this.state
        - location
        - genre



    Banner.jsx

        Top Left: logo.img
        BG: BGBanner.img

        Functionality
         Location Input
         Filter by Genre (Default All)
         Submit Button
            Updates Band.jsx
                (from Songkick API)

    Band.jsx ( 3 x 3 cards)

        Background undeclared
            default soft white???

        Band Cards Info
            left:
                image (band image from spotify API)
            right: (From Songkick API)
                Headliner
                Location
                Venue
                Time

            on hover: transparent (look at livenation.com effect)
                Playlist Button
                    if first song, create new playlist (using spotify API)
                        add top song from band to playlist spotify

    ///////VIKA ASK GSO WHY NOT AUTOMATICALLY SEND SONGKICK API TO SPOTIFY PLAYLIST


                S T R E T C H
                    watch on youtube

        Load More Band Cards On Bottom Scroll
