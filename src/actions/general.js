
export function addUserMessage(record, target) {
  let duration = undefined;
  let level = 'INFO';
  const message = record.message;
  const details = record.stack_trace;
  const meta = record.logger;

  if (record.severity === 'ERROR') {
    duration = 7000;
    level = 'ERROR';
  } else if (record.severutiy === 'WARNING') {
    duration = 5000;
    level = 'WARNING';
  } else {
    duration = 7000;
  }

  let exp = new Date().getTime();
  exp += duration;

  return { type: 'ADD_USER_MESSAGE',
           message: { message, details, level, duration, exp, meta, target } };
}


export function removeUserMessage(messageID) {
  return { type: 'REMOVE_USER_MESSAGE', messageID };
}


export function clearAllUserMessages() {
  return { type: 'CLEAR_ALL_USER_MESSAGES' };
}


export function setLoading(loading, title = '', message = '', blocking = false,
                           abortFun = undefined) {
  return {
    type: 'SET_LOADING', loading, title, message, blocking, abortFun
  };
}

export function showErrorPanel(show, message = '') {
  return {
    type: 'SHOW_ERROR_PANEL', show, message
  };
}

