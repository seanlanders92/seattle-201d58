// Create Objects for each store, using a constructor

// Pass in cookie shop data
// Location
// MinCust / MaxCust
// cookiesPerHour
// CustomersPerHour * AverageCookiesPerCustomer
// cookieTotal
// For All hours, sum cookiePerHour

// Methods
// calc cookiesPerHour 
// calc totalCookie
// calc customersEachHour

// Render Object data to a Table
// What is a table is HTML
// Header : "Location Name" | displays each hour from our hours array | "Total Per Location"
// Body : displaying a matrix based on location * hours
// Footer : displaying " Totals by Hour" | display each total per hour | total by hour and location

var locations = [];
var seattle = new CookieStore('seattle', 23, 45, 1);
//... for all stores
locations.push(seattle);