const isWeekend = (sundayWeekStart, currentDay) => {
	const sundayStartWeekend = [5, 6];
	const mondayStartWeekend = [6, 0];

	let date;

	if (currentDay) {
		try {
			date = new Date(currentDay);
		} catch (e) {
			console.error('Error with day passed in', e);
			return null;
		}
	} else {
		date = new Date();
	}

	const dayNr = date.getDay();

	if (sundayWeekStart) {
		return sundayStartWeekend.includes(dayNr);
	} else {
		return mondayStartWeekend.includes(dayNr);
	}
}

const isNotWeekend = (sundayWeekStart, currentDay) => !isWeekend(sundayWeekStart, currentDay);

exports.isWeekend = isWeekend;
exports.isNotWeekend = isNotWeekend;