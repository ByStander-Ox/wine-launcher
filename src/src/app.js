import FileSystem  from "./modules/file-system";
import AppFolders  from "./modules/app-folders";
import Config      from "./modules/config";
import Wine        from "./modules/wine";
import Command     from "./modules/command";
import System      from "./modules/system";
import Driver      from "./modules/driver";
import Network     from "./modules/network";
import Update      from "./modules/update";
import Monitor     from "./modules/monitor";
import Replaces    from "./modules/replaces";
import Patches     from "./modules/patches";
import Registry    from "./modules/registry";
import Utils       from "./modules/utils";
import WinePrefix  from "./modules/wine-prefix";
import Task        from "./modules/task";
import Prefix      from "./modules/prefix";
import Snapshot    from "./modules/snapshot";
import Diagnostics from "./modules/diagnostics";
import Lutris      from "./modules/lutris";
import PlayOnLinux from "./modules/play-on-linux";
import YandexDisk  from "./modules/yandex-disk";
import Mount       from "./modules/mount";

class App {

    UTILS         = Utils;
    PREFIX        = new Prefix();
    CONFIG        = new Config(null, this.PREFIX);
    COMMAND       = new Command(this.PREFIX, this.CONFIG);
    FILE_SYSTEM   = new FileSystem(this.PREFIX, this.COMMAND);
    NETWORK       = new Network();
    APP_FOLDERS   = new AppFolders(this.PREFIX, this.FILE_SYSTEM);
    LUTRIS        = new Lutris(this.PREFIX, this.FILE_SYSTEM, this.NETWORK);
    PLAY_ON_LINUX = new PlayOnLinux(this.PREFIX, this.FILE_SYSTEM, this.NETWORK);
    YANDEX_DISK   = new YandexDisk(this.PREFIX, this.FILE_SYSTEM, this.NETWORK);
    SYSTEM        = new System(this.PREFIX, this.COMMAND, this.FILE_SYSTEM);
    DRIVER        = new Driver(this.COMMAND, this.SYSTEM, this.FILE_SYSTEM);
    UPDATE        = new Update(this.PREFIX, this.FILE_SYSTEM, this.NETWORK);
    WINE          = new Wine(this.PREFIX, this.COMMAND, this.FILE_SYSTEM, this.UPDATE);
    MONITOR       = new Monitor(this.PREFIX, this.COMMAND, this.SYSTEM, this.FILE_SYSTEM, this.WINE);
    REPLACES      = new Replaces(this.PREFIX, this.SYSTEM, this.FILE_SYSTEM, this.MONITOR);
    PATCHES       = new Patches(this.PREFIX, this.COMMAND, this.SYSTEM, this.FILE_SYSTEM);
    REGISTRY      = new Registry(this.PREFIX, this.FILE_SYSTEM, this.REPLACES, this.WINE);
    WINE_PREFIX   = new WinePrefix(this.PREFIX, this.CONFIG, this.SYSTEM, this.FILE_SYSTEM, this.WINE, this.REPLACES, this.REGISTRY, this.PATCHES);
    SNAPSHOT      = new Snapshot(this.PREFIX, this.FILE_SYSTEM, this.REPLACES, this.WINE, this.SYSTEM);
    DIAGNOSTICS   = new Diagnostics(this.PREFIX, this.COMMAND, this.SYSTEM, this.FILE_SYSTEM);
    MOUNT_WINE    = new Mount(this.PREFIX, this.COMMAND, this.FILE_SYSTEM, this.UPDATE, this.PREFIX.getWineDir());
    MOUNT_DATA    = new Mount(this.PREFIX, this.COMMAND, this.FILE_SYSTEM, this.UPDATE, this.PREFIX.getGamesDir());

    constructor() {
        this.getAppFolders().create();
        this.getWinePrefix().create();

        // this.getWine().winetricks('dxvk');
    }

    /**
     * @param {Config} config
     * @return {Task}
     */
    createTask(config) {
        return new Task(config, this.PREFIX, this.FILE_SYSTEM, this.MONITOR);
    }

    /**
     * @returns {FileSystem}
     */
    getFileSystem() {
        return this.FILE_SYSTEM;
    }

    /**
     * @returns {Config}
     */
    getConfig() {
        return this.CONFIG;
    }

    /**
     * @returns {Command}
     */
    getCommand() {
        return this.COMMAND;
    }

    /**
     * @returns {AppFolders}
     */
    getAppFolders() {
        return this.APP_FOLDERS;
    }

    /**
     * @returns {Wine}
     */
    getWine() {
        return this.WINE;
    }

    /**
     * @returns {System}
     */
    getSystem() {
        return this.SYSTEM;
    }

    /**
     * @returns {Driver}
     */
    getDriver() {
        return this.DRIVER;
    }

    /**
     * @returns {Network}
     */
    getNetwork() {
        return this.NETWORK;
    }

    /**
     * @returns {Update}
     */
    getUpdate() {
        return this.UPDATE;
    }

    /**
     * @returns {Monitor}
     */
    getMonitor() {
        return this.MONITOR;
    }

    /**
     * @returns {Replaces}
     */
    getReplaces() {
        return this.REPLACES;
    }

    /**
     * @returns {Patches}
     */
    getPatches() {
        return this.PATCHES;
    }

    /**
     * @returns {Registry}
     */
    getRegistry() {
        return this.REGISTRY;
    }

    /**
     * @returns {Utils}
     */
    getUtils() {
        return this.UTILS;
    }

    /**
     * @returns {Prefix}
     */
    getPrefix() {
        return this.PREFIX;
    }

    /**
     * @returns {WinePrefix}
     */
    getWinePrefix() {
        return this.WINE_PREFIX;
    }

    /**
     * @return {Snapshot}
     */
    getSnapshot() {
        return this.SNAPSHOT;
    }

    /**
     * @return {Diagnostics}
     */
    getDiagnostics() {
        return this.DIAGNOSTICS;
    }

    /**
     * @return {Lutris}
     */
    getLutris() {
        return this.LUTRIS;
    }

    /**
     * @return {PlayOnLinux}
     */
    getPlayOnLinux() {
        return this.PLAY_ON_LINUX;
    }

    /**
     * @return {YandexDisk}
     */
    getYandexDisk() {
        return this.YANDEX_DISK;
    }

    /**
     * @return {Mount}
     */
    getMountWine() {
        return this.MOUNT_WINE;
    }

    /**
     * @return {Mount}
     */
    getMountData() {
        return this.MOUNT_DATA;
    }
}

export default new App();