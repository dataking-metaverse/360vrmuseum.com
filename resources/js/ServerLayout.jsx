type Props = {|
    app: string,
    config: string,
    debug: string,
    googleTagManagerKey: string,
    js: string,
    lang: string,
    locale: string,
    recaptchaSiteKey: string,
    user: string,
    version: string,
|};

type ServerLayoutType = (head: string, body: string, props: Props) => string;

const ServerLayout: ServerLayoutType = (head, body, props) => `<!DOCTYPE html>
<html lang="${props.locale}">
<head>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="version" content="${props.version}" />

    ${props.debug ? `<meta name="debug" content="1"/>` : ''}

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
    <div id="app">${body}</div>
    <div id="app-back-to-top-portal"></div>
    <div id="app-confirm-portal"></div>
    <script type="text/javascript" src="${props.js}"></script>
    ${props.googleTagManagerKey ? `
<script async src="https://www.googletagmanager.com/gtag/js?id=${props.googleTagManagerKey}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${props.googleTagManagerKey}');
</script>
    ` : ''}
<script src="https://www.google.com/recaptcha/api.js?render=${props.recaptchaSiteKey}" async defer></script>

</body>
</html>

`;

export default ServerLayout;
