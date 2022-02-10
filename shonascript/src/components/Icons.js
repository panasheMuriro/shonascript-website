import React, {useState, useEffect} from 'react';
import { Helmet } from "react-helmet";

export default function Icons() {

     const icons = [
        "activity","cloud","frown","navigation-2","sunrise",
        "airplay","cloud-drizzle","gift","octagon","sunset",
        "alert-circle","cloud-lightning","git-branch","package","tablet",
        "alert-octagon","cloud-off","git-commit","paperclip","tag",
        "alert-triangle","cloud-rain","github","pause","target",
        "align-center","cloud-snow","gitlab","pause-circle","terminal",
        "align-justify","code","git-merge","pen-tool","thermometer",
        "align-left","codepen","git-pull-request","percent","thumbs-down",
        "align-right","codesandbox","globe","phone","thumbs-up",
        "anchor","coffee","grid","phone-call","toggle-left",
        "aperture","columns","hard-drive","phone-forwarded","toggle-right",
        "archive","command","hash","phone-incoming","tool",
        "arrow-down","compass","headphones","phone-missed","trash",
        "arrow-down-circle","copy","heart","phone-off","trash-2",
        "arrow-down-left","corner-down-left","help-circle","phone-outgoing","trello",
        "arrow-down-right","corner-down-right","hexagon","pie-chart","trending-down",
        "arrow-left","corner-left-down","home","play","trending-up",
        "arrow-left-circle","corner-left-up","image","play-circle","triangle",
        "arrow-right","corner-right-down","inbox","plus","truck",
        "arrow-right-circle","corner-right-up","info","plus-circle","tv",
        "arrow-up","corner-up-left","instagram","plus-square","twitch",
        "arrow-up-circle","corner-up-right","italic","pocket","twitter",
        "arrow-up-left","cpu","key","power","type",
        "arrow-up-right","credit-card","layers","printer","umbrella",
        "at-sign","crop","layout","radio","underline",
        "award","crosshair","life-buoy","refresh-ccw","unlock",
        "bar-chart","database","link","refresh-cw","upload",
        "bar-chart-2","delete","link-2","repeat","upload-cloud",
        "battery","disc","linkedin","rewind","user",
        "battery-charging","divide","list","rotate-ccw","user-check",
        "bell","divide-circle","loader","rotate-cw","user-minus",
        "bell-off","divide-square","lock","rss","user-plus",
        "bluetooth","dollar-sign","log-in","save","users",
        "bold","download","log-out","scissors","user-x",
        "book","download-cloud","mail","search","video",
        "bookmark","dribbble","map","send","video-off",
        "book-open","droplet","map-pin","server","voicemail",
        "box","edit","maximize","settings","volume",
        "briefcase","edit-2","maximize-2","share","volume-1",
        "calendar","edit-3","meh","share-2","volume-2",
        "camera","external-link","menu","shield","volume-x",
        "camera-off","eye","message-circle","shield-off","watch",
        "cast","eye-off","message-square","shopping-bag","wifi",
        "check","facebook","mic","shopping-cart","wifi-off",
        "check-circle","fast-forward","mic-off","shuffle","wind",
        "check-square","feather","minimize","sidebar","x",
        "chevron-down","figma","minimize-2","skip-back","x-circle",
        "chevron-left","file","minus","skip-forward","x-octagon",
        "chevron-right","file-minus","minus-circle","slack","x-square",
        "chevrons-down","file-plus","minus-square","slash","youtube",
        "chevrons-left","file-text","monitor","sliders","zap",
        "chevrons-right","film","moon","smartphone","zap-off",
        "chevrons-up","filter","more-horizontal","smile","zoom-in",
        "chevron-up","flag","more-vertical","speaker","zoom-out",
        "chrome","folder","mouse-pointer","square",
        "circle","folder-minus","move","star",
        "clipboard","folder-plus","music","stop-circle",
        "clock","framer","navigation","sun",
        ]

useEffect(()=>{
    setTimeout(()=>{
        eval(`feather.replace()`)
    }, 2000)
},[])

    

    return (
        <div style={{}}>
        <Helmet>
          <meta charSet="utf-8" />
          {/* <title>ShonaScript | Dhaga</title> */}
          <script src="/feather-icons/dist/feather.js"></script>
          {/* <script defer src="/all.js"></script> */}
          <script>
              {/* feather.replace() */}
          </script>
        </Helmet>
        <div style={{color: "#008080", display: "flex", flexWrap:"wrap"}}>

    { icons.map(x=> 
    <div style={{height: "100px", width: "100px", textAlign:"center"}}>
    <i data-feather={x}></i>
    <div> {icons.indexOf(x)}</div>
    </div>
    )}
        </div>
        </div>
    )
}


