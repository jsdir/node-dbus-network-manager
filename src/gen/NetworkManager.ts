import * as DBus from 'dbus-next';
import { EventEmitter } from 'events';

/*
 * Generated by dbus-next interface generator
 * Template: typescript-class.ts.hbs
 */

// Introspection XML of org.freedesktop.NetworkManager at /org/freedesktop/NetworkManager
const XMLObjectData = `<!DOCTYPE node PUBLIC "-//freedesktop//DTD D-BUS Object Introspection 1.0//EN"
                      "http://www.freedesktop.org/standards/dbus/1.0/introspect.dtd">
<!-- GDBus 2.56.4 -->
<node>
  <interface name="org.freedesktop.DBus.Properties">
    <method name="Get">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="s" name="property_name" direction="in"/>
      <arg type="v" name="value" direction="out"/>
    </method>
    <method name="GetAll">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="a{sv}" name="properties" direction="out"/>
    </method>
    <method name="Set">
      <arg type="s" name="interface_name" direction="in"/>
      <arg type="s" name="property_name" direction="in"/>
      <arg type="v" name="value" direction="in"/>
    </method>
    <signal name="PropertiesChanged">
      <arg type="s" name="interface_name"/>
      <arg type="a{sv}" name="changed_properties"/>
      <arg type="as" name="invalidated_properties"/>
    </signal>
  </interface>
  <interface name="org.freedesktop.DBus.Introspectable">
    <method name="Introspect">
      <arg type="s" name="xml_data" direction="out"/>
    </method>
  </interface>
  <interface name="org.freedesktop.DBus.Peer">
    <method name="Ping"/>
    <method name="GetMachineId">
      <arg type="s" name="machine_uuid" direction="out"/>
    </method>
  </interface>
  <interface name="org.freedesktop.NetworkManager">
    <method name="Reload">
      <arg type="u" name="flags" direction="in"/>
    </method>
    <method name="GetDevices">
      <arg type="ao" name="devices" direction="out"/>
    </method>
    <method name="GetAllDevices">
      <annotation name="org.freedesktop.DBus.GLib.CSymbol" value="impl_manager_get_all_devices"/>
      <arg type="ao" name="devices" direction="out"/>
    </method>
    <method name="GetDeviceByIpIface">
      <arg type="s" name="iface" direction="in"/>
      <arg type="o" name="device" direction="out"/>
    </method>
    <method name="ActivateConnection">
      <arg type="o" name="connection" direction="in"/>
      <arg type="o" name="device" direction="in"/>
      <arg type="o" name="specific_object" direction="in"/>
      <arg type="o" name="active_connection" direction="out"/>
    </method>
    <method name="AddAndActivateConnection">
      <arg type="a{sa{sv}}" name="connection" direction="in"/>
      <arg type="o" name="device" direction="in"/>
      <arg type="o" name="specific_object" direction="in"/>
      <arg type="o" name="path" direction="out"/>
      <arg type="o" name="active_connection" direction="out"/>
    </method>
    <method name="DeactivateConnection">
      <arg type="o" name="active_connection" direction="in"/>
    </method>
    <method name="Sleep">
      <arg type="b" name="sleep" direction="in"/>
    </method>
    <method name="Enable">
      <arg type="b" name="enable" direction="in"/>
    </method>
    <method name="GetPermissions">
      <arg type="a{ss}" name="permissions" direction="out"/>
    </method>
    <method name="SetLogging">
      <arg type="s" name="level" direction="in"/>
      <arg type="s" name="domains" direction="in"/>
    </method>
    <method name="GetLogging">
      <arg type="s" name="level" direction="out"/>
      <arg type="s" name="domains" direction="out"/>
    </method>
    <method name="CheckConnectivity">
      <arg type="u" name="connectivity" direction="out"/>
    </method>
    <method name="state">
      <arg type="u" name="state" direction="out"/>
    </method>
    <method name="CheckpointCreate">
      <arg type="ao" name="devices" direction="in"/>
      <arg type="u" name="rollback_timeout" direction="in"/>
      <arg type="u" name="flags" direction="in"/>
      <arg type="o" name="checkpoint" direction="out"/>
    </method>
    <method name="CheckpointDestroy">
      <arg type="o" name="checkpoint" direction="in"/>
    </method>
    <method name="CheckpointRollback">
      <arg type="o" name="checkpoint" direction="in"/>
      <arg type="a{su}" name="result" direction="out"/>
    </method>
    <signal name="CheckPermissions"/>
    <signal name="StateChanged">
      <arg type="u" name="state"/>
    </signal>
    <signal name="PropertiesChanged">
      <arg type="a{sv}" name="properties"/>
    </signal>
    <signal name="DeviceAdded">
      <arg type="o" name="device_path"/>
    </signal>
    <signal name="DeviceRemoved">
      <arg type="o" name="device_path"/>
    </signal>
    <property type="ao" name="Devices" access="read"/>
    <property type="ao" name="AllDevices" access="read"/>
    <property type="b" name="NetworkingEnabled" access="read"/>
    <property type="b" name="WirelessEnabled" access="readwrite"/>
    <property type="b" name="WirelessHardwareEnabled" access="read"/>
    <property type="b" name="WwanEnabled" access="readwrite"/>
    <property type="b" name="WwanHardwareEnabled" access="read"/>
    <property type="b" name="WimaxEnabled" access="readwrite"/>
    <property type="b" name="WimaxHardwareEnabled" access="read"/>
    <property type="ao" name="ActiveConnections" access="read"/>
    <property type="o" name="PrimaryConnection" access="read"/>
    <property type="s" name="PrimaryConnectionType" access="read"/>
    <property type="u" name="Metered" access="read"/>
    <property type="o" name="ActivatingConnection" access="read"/>
    <property type="b" name="Startup" access="read"/>
    <property type="s" name="Version" access="read"/>
    <property type="au" name="Capabilities" access="read"/>
    <property type="u" name="State" access="read"/>
    <property type="u" name="Connectivity" access="read"/>
    <property type="b" name="ConnectivityCheckAvailable" access="read"/>
    <property type="b" name="ConnectivityCheckEnabled" access="readwrite"/>
    <property type="a{sv}" name="GlobalDnsConfiguration" access="readwrite"/>
  </interface>
  <node name="DnsManager"/>
  <node name="DHCP4Config"/>
  <node name="ActiveConnection"/>
  <node name="AccessPoint"/>
  <node name="Devices"/>
  <node name="AgentManager"/>
  <node name="Settings"/>
  <node name="IP6Config"/>
  <node name="IP4Config"/>
  <node name="DHCP6Config"/>
</node>
`;

/**
 * Service: org.freedesktop.NetworkManager
 * ObjectPath: /org/freedesktop/NetworkManager
 * Interface: org.freedesktop.NetworkManager
 */
export class NetworkManager extends EventEmitter {

    public readonly dbusInterfaceName = 'org.freedesktop.NetworkManager';
    public dbusObject: DBus.ProxyObject;
    public propertiesDBusInterface: DBus.ClientInterface;
    public thisDBusInterface: DBus.ClientInterface;

    public static Connect(bus: DBus.MessageBus, objectPath: string = "/org/freedesktop/NetworkManager", xml: string = XMLObjectData): Promise<NetworkManager> {
        return bus.getProxyObject('org.freedesktop.NetworkManager', objectPath, xml).then((obj) => new NetworkManager(obj));
    }

    constructor(dbusObject: DBus.ProxyObject) {
        super();
        this.dbusObject = dbusObject;
        this.thisDBusInterface = this.dbusObject.getInterface('org.freedesktop.NetworkManager');
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

    //@property({ name: 'Devices', signature: 'ao', access: ACCESS_READ })
    public Devices(): Promise<Array<DBus.ObjectPath>> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Devices').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'AllDevices', signature: 'ao', access: ACCESS_READ })
    public AllDevices(): Promise<Array<DBus.ObjectPath>> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'AllDevices').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'NetworkingEnabled', signature: 'b', access: ACCESS_READ })
    public NetworkingEnabled(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'NetworkingEnabled').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'WirelessEnabled', signature: 'b', access: ACCESS_READWRITE })
    public WirelessEnabled(): Promise<boolean>;
    public WirelessEnabled(value: boolean): Promise<void>;
    public WirelessEnabled(value?: boolean): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(this.dbusInterfaceName, 'WirelessEnabled', new DBus.Variant("b", value));
        } else {
            return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'WirelessEnabled').then((variant: DBus.Variant) => variant.value);
        }
    }

    //@property({ name: 'WirelessHardwareEnabled', signature: 'b', access: ACCESS_READ })
    public WirelessHardwareEnabled(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'WirelessHardwareEnabled').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'WwanEnabled', signature: 'b', access: ACCESS_READWRITE })
    public WwanEnabled(): Promise<boolean>;
    public WwanEnabled(value: boolean): Promise<void>;
    public WwanEnabled(value?: boolean): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(this.dbusInterfaceName, 'WwanEnabled', new DBus.Variant("b", value));
        } else {
            return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'WwanEnabled').then((variant: DBus.Variant) => variant.value);
        }
    }

    //@property({ name: 'WwanHardwareEnabled', signature: 'b', access: ACCESS_READ })
    public WwanHardwareEnabled(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'WwanHardwareEnabled').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'WimaxEnabled', signature: 'b', access: ACCESS_READWRITE })
    public WimaxEnabled(): Promise<boolean>;
    public WimaxEnabled(value: boolean): Promise<void>;
    public WimaxEnabled(value?: boolean): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(this.dbusInterfaceName, 'WimaxEnabled', new DBus.Variant("b", value));
        } else {
            return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'WimaxEnabled').then((variant: DBus.Variant) => variant.value);
        }
    }

    //@property({ name: 'WimaxHardwareEnabled', signature: 'b', access: ACCESS_READ })
    public WimaxHardwareEnabled(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'WimaxHardwareEnabled').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'ActiveConnections', signature: 'ao', access: ACCESS_READ })
    public ActiveConnections(): Promise<Array<DBus.ObjectPath>> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'ActiveConnections').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'PrimaryConnection', signature: 'o', access: ACCESS_READ })
    public PrimaryConnection(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'PrimaryConnection').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'PrimaryConnectionType', signature: 's', access: ACCESS_READ })
    public PrimaryConnectionType(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'PrimaryConnectionType').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Metered', signature: 'u', access: ACCESS_READ })
    public Metered(): Promise<number> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Metered').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'ActivatingConnection', signature: 'o', access: ACCESS_READ })
    public ActivatingConnection(): Promise<DBus.ObjectPath> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'ActivatingConnection').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Startup', signature: 'b', access: ACCESS_READ })
    public Startup(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Startup').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Version', signature: 's', access: ACCESS_READ })
    public Version(): Promise<string> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Version').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Capabilities', signature: 'au', access: ACCESS_READ })
    public Capabilities(): Promise<Array<number>> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Capabilities').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'State', signature: 'u', access: ACCESS_READ })
    public State(): Promise<number> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'State').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'Connectivity', signature: 'u', access: ACCESS_READ })
    public Connectivity(): Promise<number> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'Connectivity').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'ConnectivityCheckAvailable', signature: 'b', access: ACCESS_READ })
    public ConnectivityCheckAvailable(): Promise<boolean> {
        return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'ConnectivityCheckAvailable').then((variant: DBus.Variant) => variant.value);
    }

    //@property({ name: 'ConnectivityCheckEnabled', signature: 'b', access: ACCESS_READWRITE })
    public ConnectivityCheckEnabled(): Promise<boolean>;
    public ConnectivityCheckEnabled(value: boolean): Promise<void>;
    public ConnectivityCheckEnabled(value?: boolean): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(this.dbusInterfaceName, 'ConnectivityCheckEnabled', new DBus.Variant("b", value));
        } else {
            return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'ConnectivityCheckEnabled').then((variant: DBus.Variant) => variant.value);
        }
    }

    //@property({ name: 'GlobalDnsConfiguration', signature: 'a{sv}', access: ACCESS_READWRITE })
    public GlobalDnsConfiguration(): Promise<{[key: string]: DBus.Variant}>;
    public GlobalDnsConfiguration(value: {[key: string]: DBus.Variant}): Promise<void>;
    public GlobalDnsConfiguration(value?: {[key: string]: DBus.Variant}): Promise<any> {
        if(value !== undefined) {
            return this.propertiesDBusInterface.Set(this.dbusInterfaceName, 'GlobalDnsConfiguration', new DBus.Variant("a{sv}", value));
        } else {
            return this.propertiesDBusInterface.Get(this.dbusInterfaceName, 'GlobalDnsConfiguration').then((variant: DBus.Variant) => variant.value);
        }
    }


    /***** Methods *****/

    //@method({ name: 'Reload', inSignature: 'u', outSignature: '' })
    public Reload(flags: number): Promise<void> {
        return this.thisDBusInterface.Reload(flags);
    }

    //@method({ name: 'GetDevices', inSignature: '', outSignature: 'ao' })
    public GetDevices(): Promise<Array<DBus.ObjectPath>> {
        return this.thisDBusInterface.GetDevices();
    }

    //@method({ name: 'GetAllDevices', inSignature: '', outSignature: 'ao' })
    public GetAllDevices(): Promise<Array<DBus.ObjectPath>> {
        return this.thisDBusInterface.GetAllDevices();
    }

    //@method({ name: 'GetDeviceByIpIface', inSignature: 's', outSignature: 'o' })
    public GetDeviceByIpIface(iface: string, ): Promise<DBus.ObjectPath> {
        return this.thisDBusInterface.GetDeviceByIpIface(iface, );
    }

    //@method({ name: 'ActivateConnection', inSignature: 'ooo', outSignature: 'o' })
    public ActivateConnection(connection: DBus.ObjectPath, device: DBus.ObjectPath, specific_object: DBus.ObjectPath, ): Promise<DBus.ObjectPath> {
        return this.thisDBusInterface.ActivateConnection(connection, device, specific_object, );
    }

    //@method({ name: 'AddAndActivateConnection', inSignature: 'a{sa{sv}}oo', outSignature: 'oo' })
    public AddAndActivateConnection(connection: /* a{sa{sv}} */ {[key:string]: any}, device: DBus.ObjectPath, specific_object: DBus.ObjectPath, ): Promise<any> {
        return this.thisDBusInterface.AddAndActivateConnection(connection, device, specific_object, );
    }

    //@method({ name: 'DeactivateConnection', inSignature: 'o', outSignature: '' })
    public DeactivateConnection(active_connection: DBus.ObjectPath): Promise<void> {
        return this.thisDBusInterface.DeactivateConnection(active_connection);
    }

    //@method({ name: 'Sleep', inSignature: 'b', outSignature: '' })
    public Sleep(sleep: boolean): Promise<void> {
        return this.thisDBusInterface.Sleep(sleep);
    }

    //@method({ name: 'Enable', inSignature: 'b', outSignature: '' })
    public Enable(enable: boolean): Promise<void> {
        return this.thisDBusInterface.Enable(enable);
    }

    //@method({ name: 'GetPermissions', inSignature: '', outSignature: 'a{ss}' })
    public GetPermissions(): Promise<{[key: string]: string}> {
        return this.thisDBusInterface.GetPermissions();
    }

    //@method({ name: 'SetLogging', inSignature: 'ss', outSignature: '' })
    public SetLogging(level: string, domains: string): Promise<void> {
        return this.thisDBusInterface.SetLogging(level, domains);
    }

    //@method({ name: 'GetLogging', inSignature: '', outSignature: 'ss' })
    public GetLogging(): Promise<any> {
        return this.thisDBusInterface.GetLogging();
    }

    //@method({ name: 'CheckConnectivity', inSignature: '', outSignature: 'u' })
    public CheckConnectivity(): Promise<number> {
        return this.thisDBusInterface.CheckConnectivity();
    }

    //@method({ name: 'state', inSignature: '', outSignature: 'u' })
    public state(): Promise<number> {
        return this.thisDBusInterface.state();
    }

    //@method({ name: 'CheckpointCreate', inSignature: 'aouu', outSignature: 'o' })
    public CheckpointCreate(devices: Array<DBus.ObjectPath>, rollback_timeout: number, flags: number, ): Promise<DBus.ObjectPath> {
        return this.thisDBusInterface.CheckpointCreate(devices, rollback_timeout, flags, );
    }

    //@method({ name: 'CheckpointDestroy', inSignature: 'o', outSignature: '' })
    public CheckpointDestroy(checkpoint: DBus.ObjectPath): Promise<void> {
        return this.thisDBusInterface.CheckpointDestroy(checkpoint);
    }

    //@method({ name: 'CheckpointRollback', inSignature: 'o', outSignature: 'a{su}' })
    public CheckpointRollback(checkpoint: DBus.ObjectPath, ): Promise<{[key: string]: number}> {
        return this.thisDBusInterface.CheckpointRollback(checkpoint, );
    }

}
/***** Signals for org.freedesktop.NetworkManager *****/
export declare interface NetworkManager {
    //@signal({ name: 'CheckPermissions', signature: '' })
    on(evt: "CheckPermissions", cb: () => void): this;
    //@signal({ name: 'StateChanged', signature: 'u' })
    on(evt: "StateChanged", cb: (state: number) => void): this;
    //@signal({ name: 'PropertiesChanged', signature: 'a{sv}' })
    on(evt: "PropertiesChanged", cb: (properties: {[key: string]: DBus.Variant}) => void): this;
    //@signal({ name: 'DeviceAdded', signature: 'o' })
    on(evt: "DeviceAdded", cb: (device_path: DBus.ObjectPath) => void): this;
    //@signal({ name: 'DeviceRemoved', signature: 'o' })
    on(evt: "DeviceRemoved", cb: (device_path: DBus.ObjectPath) => void): this;
    on(evt: "PropertiesChanged", cb: (iface: string, changedProperties: {[key:string]: any}, invalidatedProperties: string[]) => void): this;
    on(event: string, listener: Function): this;
}

