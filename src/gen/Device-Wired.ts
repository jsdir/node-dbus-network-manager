import * as DBus from 'dbus-next';
import { EventEmitter } from 'events';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class.ts.hbs
 */


/**
 * Service: org.freedesktop.NetworkManager
 * ObjectPath: /org/freedesktop/NetworkManager/Devices/*
 * Interface: org.freedesktop.NetworkManager.Device.Wired
 */
export class DeviceWired extends EventEmitter {

    public readonly dbusInterfaceName = 'org.freedesktop.NetworkManager.Device.Wired';
    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string, xml?: string): Promise<DeviceWired> {
        return bus.getProxyObject('org.freedesktop.NetworkManager', objectPath, xml).then((obj) => new DeviceWired(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.freedesktop.NetworkManager.Device.Wired');
        this.propertiesDBusInterface = this.dbusObject.getInterface('org.freedesktop.DBus.Properties');

        // forward property change events
        const forwardPropertyChange = (iface: string, changed: any, invalidated: any) => {
            if(iface === this.dbusInterfaceName) {
                this.emit('PropertiesChanged', iface, changed, invalidated);
            }
        }

        // forward all signals
        this.on("newListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.on('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.on(event, listener);
            }
        });
        this.on("removeListener", (event: string, listener: (...args: any[]) => void) => {
            if(event === "PropertiesChanged" && this.listenerCount('PropertiesChanged') === 0) {
                this.propertiesDBusInterface.removeListener('PropertiesChanged', forwardPropertyChange);
            } else {
                this.thisDBusInterface.removeListener(event, listener);
            }
        });
    }

    /***** Properties *****/

    public getProperties(): Promise<{[name: string]: DBus.Variant}> {
        return this.propertiesDBusInterface.GetAll(this.dbusInterfaceName);
    }

    public getProperty(name: string): Promise<DBus.Variant> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, name);
    }

    public setProperty(name: string, value: DBus.Variant): Promise<void> {
        return this.propertiesDBusInterface.Set(this.dbusInterfaceName, name, value);
    }

    //@property({ name: 'HwAddress', signature: 's', access: ACCESS_READ })
    public HwAddress(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'HwAddress').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'PermHwAddress', signature: 's', access: ACCESS_READ })
    public PermHwAddress(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'PermHwAddress').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Speed', signature: 'u', access: ACCESS_READ })
    public Speed(): Promise<number> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Speed').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'S390Subchannels', signature: 'as', access: ACCESS_READ })
    public S390Subchannels(): Promise<Array<string>> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'S390Subchannels').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Carrier', signature: 'b', access: ACCESS_READ })
    public Carrier(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Carrier').then((variant: DBus.Variant) => variant.value);
    }


    /***** Methods *****/

}
/***** Signals for org.freedesktop.NetworkManager.Device.Wired *****/
export declare interface DeviceWired {
    //@signal({ name: 'PropertiesChanged', signature: 'a{sv}' })
    on(evt: "PropertiesChanged", cb: (properties: {[key: string]: DBus.Variant}) => void): this;
    on(evt: "PropertiesChanged", cb: (iface: string, changedProperties: {[key:string]: any}, invalidatedProperties: string[]) => void): this;
    on(event: string, listener: Function): this;
}

