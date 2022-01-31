/**
 * @internal
 * Sends an event to Plausible's API
 *
 * @param data - Event data to send
 * @param options - Event options
 */
export function sendEvent(eventName, data, options) {
    const isLocalhost = /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname) || location.protocol === 'file:';
    if (!data.trackLocalhost && isLocalhost) {
        return console.warn('[Plausible] Ignoring event because website is running locally');
    }
    const shouldIgnoreCurrentBrowser = localStorage.getItem('plausible_ignore') === 'true';
    if (shouldIgnoreCurrentBrowser) {
        return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage');
    }
    const payload = {
        n: eventName,
        u: data.url,
        d: data.domain,
        r: data.referrer,
        w: data.deviceWidth,
        h: data.hashMode ? 1 : 0,
        p: options && options.props ? JSON.stringify(options.props) : undefined,
    };
    const req = new XMLHttpRequest();
    req.open('POST', `${data.apiHost}/api/event`, true);
    req.setRequestHeader('Content-Type', 'text/plain');
    req.send(JSON.stringify(payload));
    // eslint-disable-next-line functional/immutable-data
    req.onreadystatechange = () => {
        if (req.readyState !== 4)
            return;
        if (options && options.callback) {
            options.callback();
        }
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcmVxdWVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkE7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsU0FBaUIsRUFDakIsSUFBZ0MsRUFDaEMsT0FBc0I7SUFFdEIsTUFBTSxXQUFXLEdBQ2YsNkRBQTZELENBQUMsSUFBSSxDQUNoRSxRQUFRLENBQUMsUUFBUSxDQUNsQixJQUFJLFFBQVEsQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDO0lBRXJDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLFdBQVcsRUFBRTtRQUN2QyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQ2pCLCtEQUErRCxDQUNoRSxDQUFDO0tBQ0g7SUFFRCxNQUFNLDBCQUEwQixHQUM5QixZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ3RELElBQUksMEJBQTBCLEVBQUU7UUFDOUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQix3RkFBd0YsQ0FDekYsQ0FBQztLQUNIO0lBRUQsTUFBTSxPQUFPLEdBQWlCO1FBQzVCLENBQUMsRUFBRSxTQUFTO1FBQ1osQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHO1FBQ1gsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ2QsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRO1FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDeEUsQ0FBQztJQUVGLE1BQU0sR0FBRyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7SUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRCxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxxREFBcUQ7SUFDckQsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsRUFBRTtRQUM1QixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQztZQUFFLE9BQU87UUFDakMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUMvQixPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDIn0=