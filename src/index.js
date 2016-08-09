import {remote} from 'electron'
const {app, getCurrentWindow} = remote

export default robot => {

  const restart = () => {
    app.relaunch();
    app.quit();
  };

  robot.listen(/^restart$/, {
    description: "Restart",
    usage: 'restart'
  }, () => {
    restart();
  });

  robot.listen(/^open devtools$/, {
    description: 'Open the chrome dev tools',
    usage: 'open devtools'
  }, () => {
    getCurrentWindow().openDevTools();
  });

  robot.listen(/^close devtools$/, {
    description: 'Close the chrome dev tools',
    usage: 'close devtools'
  }, () => {
    getCurrentWindow().closeDevTools();
  });

  robot.listen(/^toggle devtools$/, {
    description: 'Toggle the chrome dev tools',
    usage: 'toggle devtools'
  }, () => {
    getCurrentWindow().toggleDevTools();
  });

  robot.listen(/^quit$/, {
    description: 'Close the application',
    usage: 'quit'
  }, () => {
    app.quit();
  });

  robot.listen(/^refresh$/, {
    description: 'Refresh the window',
    usage: 'refresh'
  }, () => {
    window.location.reload();
  });
}
