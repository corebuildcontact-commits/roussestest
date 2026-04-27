/* global React, ReactDOM, TweaksPanel, useTweaks, TweakSection, TweakColor, TweakSelect, TweakRadio, TweakToggle */

const { useEffect } = React;

const DEFAULTS = window.MR_TWEAKS || {
  primaryColor: "#1B3A5C",
  accentColor: "#E8A020",
  secondaryColor: "#2E7D54",
  fontDisplay: "Playfair Display",
  fontBody: "DM Sans",
  effectsLevel: "max",
  showAlertBar: true,
  showSnow: true,
  showCurtain: true,
};

function MairieTweaks() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  useEffect(() => {
    const root = document.documentElement.style;
    root.setProperty('--color-primary', tweaks.primaryColor);
    root.setProperty('--color-accent', tweaks.accentColor);
    root.setProperty('--color-secondary', tweaks.secondaryColor);
    root.setProperty('--font-display', `"${tweaks.fontDisplay}", serif`);
    root.setProperty('--font-body', `"${tweaks.fontBody}", system-ui, sans-serif`);

    // Alert bar
    const alert = document.querySelector('.alert-bar');
    if (alert) alert.style.display = tweaks.showAlertBar ? '' : 'none';

    // Snow particles
    const particles = document.querySelector('.hero__particles');
    if (particles) particles.style.display = tweaks.showSnow ? '' : 'none';

    // Effects level
    document.body.dataset.effects = tweaks.effectsLevel;
  }, [tweaks]);

  return (
    <TweaksPanel title="Tweaks · Mairie des Rousses">
      <TweakSection label="Palette" />
      <TweakColor label="Bleu nuit" value={tweaks.primaryColor} onChange={(v) => setTweak('primaryColor', v)} />
      <TweakColor label="Or accent" value={tweaks.accentColor} onChange={(v) => setTweak('accentColor', v)} />
      <TweakColor label="Vert forêt" value={tweaks.secondaryColor} onChange={(v) => setTweak('secondaryColor', v)} />

      <TweakSection label="Typographie" />
      <TweakSelect
        label="Titres"
        value={tweaks.fontDisplay}
        onChange={(v) => setTweak('fontDisplay', v)}
        options={['Playfair Display', 'DM Serif Display', 'Cormorant Garamond', 'Libre Caslon Text']}
      />
      <TweakSelect
        label="Corps"
        value={tweaks.fontBody}
        onChange={(v) => setTweak('fontBody', v)}
        options={['DM Sans', 'Manrope', 'Work Sans', 'Public Sans']}
      />

      <TweakSection label="Effets" />
      <TweakRadio
        label="Densité"
        value={tweaks.effectsLevel}
        onChange={(v) => setTweak('effectsLevel', v)}
        options={['min', 'mid', 'max']}
      />
      <TweakToggle label="Flocons hero" value={tweaks.showSnow} onChange={(v) => setTweak('showSnow', v)} />
      <TweakToggle label="Bandeau alerte" value={tweaks.showAlertBar} onChange={(v) => setTweak('showAlertBar', v)} />
    </TweaksPanel>
  );
}

const root = ReactDOM.createRoot(document.getElementById('tweaks-root'));
root.render(<MairieTweaks />);
