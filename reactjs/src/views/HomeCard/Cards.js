import React, {Component} from "react";
import CardModel from "./CardModel";

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col">
                        <a className="cardhref" href="https://www.ign.com/articles/activision-blizzard-chief-compliance-officer-frances-townsend-has-stepped-down">
                        <CardModel 
                            imgsrc='https://assets-prd.ignimgs.com/2022/10/01/frabn-1664597542389.png?fit=bounds&width=1280&height=720'
                            title="Activision Blizzard Chief Compliance Officer Frances Townsend Has Stepped Down" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.avclub.com/house-of-the-dragon-characters-unlikeable-1849603980">
                        <CardModel 
                            imgsrc='https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/c890af46037c6c5c94f1171819c51a43.jpg'
                            title="Who is left for us to root for on House Of The Dragon?" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.polygon.com/23381065/moonbreaker-preview-brandon-sanderson-painting-miniatures">
                        <CardModel 
                            imgsrc='https://cdn.vox-cdn.com/thumbor/z3cZbygKkShiyUIKRCo6enuLX0E=/0x0:1920x1080/920x613/filters:focal(661x287:967x593):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71443616/PBR_KEY_2_HORIZ_FINAL_web_center_2_230986b42c.0.jpg'
                            title="Moonbreaker blends Warhammer love with Brandon Sanderson lore and an audio drama" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.engadget.com/google-stadia-death-stranding-follow-up-exclusive-report-200857092.html?src=rss">
                        <CardModel 
                            imgsrc='https://s.yimg.com/uu/api/res/1.2/vMaa_Tq3BriQljgn24toGg--~B/Zmk9ZmlsbDtoPTM2MTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-10/e5e11df0-41c2-11ed-a7dd-fe2f03bd0a5e.cf.webp'
                            title="Google reportedly canceled a Stadia-exclusive follow-up to 'Death Stranding'" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theguardian.com/games/2022/sep/27/fifa-23-review-eas-final-fifa-game-bows-out-gracefully">
                        <CardModel 
                            imgsrc='https://i.guim.co.uk/img/media/4cd2e3dfef9da0adb8f4ea1294d4d1097f50bd63/152_0_2234_1342/master/2234.jpg?width=620&quality=45&dpr=2&s=none'
                            title="Fifa 23 review - EA's final Fifa game bows out gracefully" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theguardian.com/games/2022/sep/30/too-much-information-video-game-character-creation-has-gone-too-far">
                        <CardModel 
                            imgsrc='https://i.guim.co.uk/img/media/ceebf2dbfaa0500a9b39da0fd84ab9aa98406e89/240_0_3600_2160/master/3600.jpg?width=620&quality=45&dpr=2&s=none'
                            title="Too much information: video game character creation has gone too far" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.avclub.com/house-of-the-dragon-review-season-1-episode-7-driftm-1849607438">
                        <CardModel 
                            imgsrc='https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/61d37432c37fc3fac8932fc85e7850f2.jpg'
                            title="This week's House Of The Dragon is undone by a slow first half" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.polygon.com/23381183/house-dragon-all-dragons-riders-vhagar">
                        <CardModel 
                            imgsrc='https://cdn.vox-cdn.com/thumbor/-etowwx7VwYgUeboFOH3yw4kxrY=/0x0:1581x789/920x613/filters:focal(771x123:1023x375):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71445681/caraxes_1.0.jpeg'
                            title="All the dragons in House of the Dragon" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.ign.com/articles/video-game-release-dates-ps4-ps5-xbox-one-series-x-nintendo-switch">
                        <CardModel 
                            imgsrc='https://assets-prd.ignimgs.com/2022/08/16/callofdutymodernwarfare2earlyaccesscampaigntrailer-ign-blogroll-1660672392369.jpg?fit=bounds&width=1280&height=720'
                            title="Video Game Release Dates: Biggest Games of 2022 and Beyond" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.engadget.com/stadia-shut-down-google-ubisoft-connect-pc-gaming-184117918.html?src=rss">
                        <CardModel 
                            imgsrc='https://s.yimg.com/uu/api/res/1.2/UiUK9p0K2kwP23Nj9K5b5w--~B/Zmk9ZmlsbDtoPTQ1MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-05/a62b2050-e120-11ec-bffe-a293fb07b29c.cf.webp'
                            title="Ubisoft will help jilted Stadia users transfer their purchases to PC" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theverge.com/2022/9/30/23381106/google-stadia-shutdown-shocked-developers-too">
                        <CardModel 
                            imgsrc='https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fb-eXttPT2V_dPSPiRRfRL1Q4PrE%3D%2F0x0%3A2040x1360%2F1000x1000%2Ffilters%3Afocal(1020x680%3A1021x681)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F19376597%2Fakrales_191113_3779_0163.jpg&w=640&q=75'
                            title="Stadia's shutdown shocked developers, too" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.engadget.com/intel-arc-a770-a750-gpu-graphics-cards-specs-price-release-date-210027325.html?src=rss">
                        <CardModel 
                            imgsrc='https://s.yimg.com/uu/api/res/1.2/8RPK1a9GZbWX021wYxMK7A--~B/Zmk9ZmlsbDtoPTM4MTt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-09/65f09270-4036-11ed-bffe-595fd57a8c49.cf.webp'
                            title="Intel claims its Arc A770 and A750 GPUs will outperform NVIDIA's mid-range RTX 3060" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theverge.com/2022/9/30/23380750/google-stadia-shut-down-skyrim-elder-scrolls-eso-gaming-xbox-ps5">
                        <CardModel 
                            imgsrc='https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F9ZqJAZJVKOPFZXqG-GcLEDwzUNg%3D%2F0x0%3A1461x918%2F2000x1333%2Ffilters%3Afocal(731x459%3A732x460)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F15972614%2Fstadia_controller.jpg&w=750&q=75'
                            title="I fell in love with Stadia right as it shut down" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.polygon.com/23373724/gundam-evolution-impressions-overwatch">
                        <CardModel 
                            imgsrc='https://cdn.vox-cdn.com/thumbor/atFnNAxHu32Yk5BoptzI9sCUydk=/0x0:1920x1080/920x613/filters:focal(1222x381:1528x687):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71444012/ss_251ee5b0730c74e003364cd9f45b92bd7927d552.0.jpg'
                            title="Gundam Evolution welcomes Gundam and Overwatch fans with big metal arms" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theguardian.com/games/2022/sep/28/alfred-hitchcock-vertigo-review-video-game-adaptation-pc-playstation-xbox">
                        <CardModel 
                            imgsrc='https://i.guim.co.uk/img/media/03e126932f73fd50ace8ceffba28cad16bf9aee5/304_2187_5353_3211/master/5353.jpg?width=620&quality=45&dpr=2&s=none'
                            title="Alfred Hitchcock: Vertigo review - uncomfortable for all the wrong reasons" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.engadget.com/msi-stealth-15m-review-coasting-on-its-good-looks-192429083.html?src=rss">
                        <CardModel 
                            imgsrc='https://s.yimg.com/uu/api/res/1.2/cJj2cbajc1128omUt7HHvQ--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-09/bb5bdd40-3f65-11ed-b7ff-57bd9dbf7253.cf.webp'
                            title="MSI Stealth 15M review: Coasting on its good looks" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theverge.com/2022/9/30/23380703/ubisoft-google-stadia-transfer-purchases-pc-shutdown">
                        <CardModel 
                            imgsrc='https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F-CzrfFBOfM-hRbGk5nveOMIMUUs%3D%2F0x0%3A1058x595%2F2000x1333%2Ffilters%3Afocal(529x298%3A530x299)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24069115%2F5e849c6c5cdf9a21c0b4e731_2.jpeg&w=750&q=75'
                            title="Ubisoft will let you transfer your Stadia purchases to PC" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.theguardian.com/games/2022/sep/28/we-can-continue-pratchetts-efforts-the-gamers-keeping-discworld-alive">
                        <CardModel 
                            imgsrc='https://i.guim.co.uk/img/media/e4d29bdadfa6314bfbf82b66fa1f6460ee2ff2de/0_200_6000_3600/master/6000.jpg?width=620&quality=45&dpr=2&s=none'
                            title="'We can continue Pratchett's efforts': the gamers keeping Discworld alive" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.ign.com/articles/ubisoft-bungie-and-others-working-on-stadia-game-save-transfers">
                        <CardModel 
                            imgsrc='https://i2.wp.com/assets1.ignimgs.com/2020/04/30/assassins-creed-odyssey-preorder-blogroll-1588261711264.jpg?resize=780,470'
                            title="Ubisoft, Bungie, and Others Working on Stadia Game Save Transfers" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.engadget.com/mythic-quest-season-3-release-date-apple-tv-plus-164959049.html?src=rss">
                        <CardModel 
                            imgsrc='https://s.yimg.com/uu/api/res/1.2/3srOhvYYsrIaJKy8AEYuhw--~B/Zmk9ZmlsbDtoPTQ1MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-09/730298e0-401e-11ed-bd92-a60a28c3b55d.cf.webp'
                            title="'Mythic Quest' season 3 debuts November 11th on Apple TV+" 
                        />
                        </a>
                    </div>
                    <div className="col">
                        <a className="cardhref" href="https://www.polygon.com/best-games/22372750/best-game-pass-games-xbox">
                        <CardModel 
                            imgsrc='https://cdn.vox-cdn.com/thumbor/rZmfNZwq9Fl-euGvxCjvAn3ckxE=/0x0:3000x2000/1820x1024/filters:focal(1260x760:1740x1240):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69124930/jbareham_220118_ecl1087_stock_xbox_one_pass.6.jpg'
                            title="The 29 best games on Game Pass" 
                        />
                        </a>
                    </div>
                    

                </div>
            </div>
        )
    }
}

export default Cards