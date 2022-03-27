#define PI 3.141592653
#ifdef GL_ES
precision mediump float;
#endif

// lets grab texcoords just for fun
varying vec2 vTexCoord;

uniform sampler2D tex;


// vectors and floats coming from sketch.js
uniform vec2 u_resolution;
uniform float u_frame;
uniform float blah;
// float u_frame = 1.0;
uniform vec2 u_mouse;

float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                * 43758.5453123);
}

// Value noise by Inigo Quilez - iq/2013
// https://www.shadertoy.com/view/lsf3WH
float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    vec2 u = f*f*(3.0-2.0*f);
    return mix( mix( random( i + vec2(0.0,0.0) ),
                     random( i + vec2(1.0,0.0) ), u.x),
                mix( random( i + vec2(0.0,1.0) ),
                     random( i + vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float angle){
    return mat2(cos(angle),-sin(angle),
                sin(angle),cos(angle));
}

float lines(in vec2 pos, float b){
    float scale = 10.0;
    pos *= scale;
    return smoothstep(0.0,
                    .5+b*.5,
                    abs((sin(pos.x*PI)+b*2.0))*.5);
}

void main() {

  vec2 uv = vTexCoord;

    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.y *= u_resolution.y/u_resolution.x;

    // vec2 pos = st.yx*vec2(1.*cos(u_time/3.),1.*sin(u_time/3.));
    vec2 pos = st.yx*vec2(u_frame/5.,u_frame);

    // float pattern = pos.x;

    // Add noise
    pos = rotate2d( noise(pos) ) * pos;

    // Draw lines
    float pattern = lines(pos, 0.03);
    vec4 noiseTex = vec4(vec3(pattern),1.0); 
    float avg = dot(noiseTex.rgb, vec3(.03));
    // then spread it between -1 and 1
    // avg = avg * 2.0 - 1.0;
    avg = avg * 1.5 - 0.07; // <---
    // we will displace the image by some amt
    // float dispX = avg/20.*sin(u_frame);
    // float dispY = avg/20.*cos(u_frame);
    float dispX = avg/1.*u_frame;
    float dispY = avg*u_frame*3.;

    // vec4 newTex = texture2D(tex, vec2(uv.x-dispX,uv.y+dispY));
    
    vec4 first = texture2D(tex, vec2(uv.x-dispX*0.95,uv.y+dispY*0.95));
    vec4 middle = texture2D(tex, vec2(uv.x-dispX,uv.y+dispY));
    vec4 last = texture2D(tex, vec2(uv.x-dispX*1.05,uv.y+dispY*1.05));
    vec4 newTex = vec4(first.r,middle.g,last.b,1.0);
    gl_FragColor = newTex;
}