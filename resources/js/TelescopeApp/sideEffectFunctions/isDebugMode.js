const isDebugMode = () => !!document.querySelector('meta[name="debug"][content="1"]');

export default isDebugMode;
