import React from "react";
import {Helmet} from "react-helmet";
import shortcutIcon from "../pages/index/logo_site.ico"

const HelmHeader: React.FC = () => {
    return (
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Kirimatt</title>
            <link rel="shortcut icon" href={shortcutIcon} type="image/x-icon"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"/>
        </Helmet>
    )
}

export default HelmHeader;