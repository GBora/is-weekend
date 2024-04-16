# is-weekend

Package to see if a day is on the weekend with 0 dependencies

Import it
`const isWeekend = require('is-date-weekend').isWeekend;`

Using it to check if the current day is in the weekend, will return true or false, if there is an error it will log it and return null

`console.log(isWeekend());`

The default assumption is that the weekend is Saturday and Sunday, if your weekend is Friday and Saturday you need to pass in an parameter set to true

`console.log(isWeekend(true));`

You can also check a specific date, it needs to be in a format that the standard Date constructor will accept 

`console.log(isWeekend(false, "July 21, 1983 01:15:00"));`

You also have an helper method that does the reverse

`const isNotWeekend = require('is-date-weekend').isNotWeekend;`
