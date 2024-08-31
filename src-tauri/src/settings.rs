pub(crate) fn settings_window(app: &tauri::AppHandle) -> tauri::Window {
    tauri::WindowBuilder::new(
        app,
        "settings", // window label
        tauri::WindowUrl::App("/#/settings".into())
    )
        .title("Settings")
        .transparent(true)
        .decorations(false)
        .build()
        .expect("failed to create settings window")
}