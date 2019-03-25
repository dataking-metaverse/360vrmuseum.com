const ServerLayout = (head, body, props) => `<!DOCTYPE html>
<html lang="${props.lang}">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    ${props.debug && `<meta name="debug" content="1"/>`}

    <!-- config and app -->
    <script type="text/javascript">
        window.user = function() { return ${props.user}; };
        window.config = function() { return ${props.config}; };
        window.app = function() { return ${props.app}; };
        window.lang = function() { return ${props.lang}; };
    </script>
    
    ${head}
</head>
<body>
    ${body}
    <div id="app-back-to-top-portal"></div>
    <script type="text/javascript" src="${props.js}"></script>
</body>
</html>

`;

export default ServerLayout;
