
use tauri::{AboutMetadata, CustomMenuItem, Menu, MenuItem, Submenu};
pub fn create_app_menu() -> Menu {

    let settings_menu: CustomMenuItem = CustomMenuItem::new("settings".to_string(), "Settings");

    let about_metadata: AboutMetadata = AboutMetadata::new()
        .version(env!("CARGO_PKG_VERSION"))
        .authors(vec!["Dawid Kwasowski".to_string()])
        .comments("This is a simple terminal")
        .copyright("© 2024 Dawid Kwasowski")
        .license("MIT")
        .website("https://github.com/Dawid-Kwasowski/super-bassoon")
        .website_label("GitHub Repository");

    Menu::new()
        .add_submenu(Submenu::new("App", Menu::new()
            .add_native_item(MenuItem::About("Simple Terminal".to_string(), about_metadata))
            .add_item(settings_menu)
            .add_native_item(MenuItem::Separator)
            .add_native_item(MenuItem::Quit)
        ))
}