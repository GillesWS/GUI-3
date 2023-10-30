### Algemeen
Samen met klasgenoot testing geprobeerd te maken aangezien we dit niet zo goed snapte, maar uiteindelijk zijn we er niet uitgekomen en verder gegaan met de rest

### Firebase url:
https://console.firebase.google.com/project/database-gui-ab5d4/

### testing plan: 
### nakijken of de pagina aangemaakt is
 it('should create', () => {
    expect(component).toBeTruthy();
  });
### nakijken of form valid is
  it('invalidForm should be true', () => {
    expect(component.invalidForm).toBeTrue();
  });
### nakijken of form invalid is
  it('invalidForm should be false', () => {
    expect(component.invalidForm).toBeFalse();
  });
### nakijken of er op de knop is geklikt
  it('button has been pressed', () => {
    expect(component.buttonIsPressed).toBeTrue();
  });
### nakijken of er niet op de knop is geklikt
  it('button has not been pressed', () => {
    expect(component.buttonIsPressed).toBeFalse();
  })


### test results:
Geen resultaten, zoals hierboven geschreven.

# Access admin:
email: r0902507@student.thomasmore.be
ww: 456789