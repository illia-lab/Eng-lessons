import { stringifyData, wrapInRed} from 'sat-utils';

const { LOGGING } = process.env;

function logInfo(message, data?) {
	if (LOGGING) {
		data = data || '';
  console.log(`${message}`,wrapInRed(stringifyData(data)))
  }
}

export { logInfo };
