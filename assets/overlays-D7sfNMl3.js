import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{t}from"./extends-CvVTau-c.js";import{n,t as r}from"./jsx-runtime-C3cWAN_r.js";import{C as i,D as a,F as o,G as s,J as c,K as l,L as u,N as d,P as f,R as p,T as m,U as h,V as g,Z as ee,_t as _,b as te,g as ne,gt as v,ht as y,lt as b,n as x,q as re,rt as S,st as C,ut as w,vt as T,yt as E,z as D}from"./SceneContext-CAXqVjA3.js";import{t as ie}from"./react-DxqK_ztm.js";var O=parseInt(`187`.replace(/\D+/g,``)),k=O>=125?`uv1`:`uv2`,A=new a,j=new _,M=class extends p{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type=`LineSegmentsGeometry`,this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute(`position`,new u([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute(`uv`,new u([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let n=new D(t,6,1);return this.setAttribute(`instanceStart`,new g(n,3,0)),this.setAttribute(`instanceEnd`,new g(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let n;e instanceof Float32Array?n=e:Array.isArray(e)&&(n=new Float32Array(e));let r=new D(n,t*2,1);return this.setAttribute(`instanceColorStart`,new g(r,t,0)),this.setAttribute(`instanceColorEnd`,new g(r,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new E(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new a);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),A.setFromBufferAttribute(t),this.boundingBox.union(A))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new b),this.boundingBox===null&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let r=0;for(let i=0,a=e.count;i<a;i++)j.fromBufferAttribute(e,i),r=Math.max(r,n.distanceToSquared(j)),j.fromBufferAttribute(t,i),r=Math.max(r,n.distanceToSquared(j));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.`,this)}}toJSON(){}applyMatrix(e){return console.warn(`THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4().`),this.applyMatrix4(e)}},N=class extends M{constructor(){super(),this.isLineGeometry=!0,this.type=`LineGeometry`}setPositions(e){let t=e.length-3,n=new Float32Array(2*t);for(let r=0;r<t;r+=3)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];return super.setPositions(n),this}setColors(e,t=3){let n=e.length-t,r=new Float32Array(2*n);if(t===3)for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5];else for(let i=0;i<n;i+=t)r[2*i]=e[i],r[2*i+1]=e[i+1],r[2*i+2]=e[i+2],r[2*i+3]=e[i+3],r[2*i+4]=e[i+4],r[2*i+5]=e[i+5],r[2*i+6]=e[i+6],r[2*i+7]=e[i+7];return super.setColors(r,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}},P=class extends C{constructor(e){super({type:`LineMaterial`,uniforms:y.clone(y.merge([m.common,m.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new v(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${O>=154?`colorspace_fragment`:`encodings_fragment`}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA=`1`:delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return`WORLD_UNITS`in this.defines},set:function(e){e===!0?this.defines.WORLD_UNITS=``:delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return`USE_DASH`in this.defines},set(e){!!e!=`USE_DASH`in this.defines&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH=``:delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return`USE_ALPHA_TO_COVERAGE`in this.defines},set:function(e){!!e!=`USE_ALPHA_TO_COVERAGE`in this.defines&&(this.needsUpdate=!0),e===!0?(this.defines.USE_ALPHA_TO_COVERAGE=``,this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}},F=new T,I=new _,L=new _,R=new T,z=new T,B=new T,V=new _,H=new l,U=new h,W=new _,G=new a,K=new b,q=new T,J,Y;function X(e,t,n){return q.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),q.multiplyScalar(1/q.w),q.x=Y/n.width,q.y=Y/n.height,q.applyMatrix4(e.projectionMatrixInverse),q.multiplyScalar(1/q.w),Math.abs(Math.max(q.x,q.y))}function ae(e,t){let n=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let r=0,s=o;r<s;r++){U.start.fromBufferAttribute(i,r),U.end.fromBufferAttribute(a,r),U.applyMatrix4(n);let o=new _,s=new _;J.distanceSqToSegment(U.start,U.end,s,o),s.distanceTo(o)<Y*.5&&t.push({point:s,pointOnLine:o,distance:J.origin.distanceTo(s),object:e,face:null,faceIndex:r,uv:null,[k]:null})}}function oe(e,t,n){let r=t.projectionMatrix,i=e.material.resolution,a=e.matrixWorld,o=e.geometry,c=o.attributes.instanceStart,l=o.attributes.instanceEnd,u=Math.min(o.instanceCount,c.count),d=-t.near;J.at(1,B),B.w=1,B.applyMatrix4(t.matrixWorldInverse),B.applyMatrix4(r),B.multiplyScalar(1/B.w),B.x*=i.x/2,B.y*=i.y/2,B.z=0,V.copy(B),H.multiplyMatrices(t.matrixWorldInverse,a);for(let t=0,o=u;t<o;t++){if(R.fromBufferAttribute(c,t),z.fromBufferAttribute(l,t),R.w=1,z.w=1,R.applyMatrix4(H),z.applyMatrix4(H),R.z>d&&z.z>d)continue;if(R.z>d){let e=R.z-z.z,t=(R.z-d)/e;R.lerp(z,t)}else if(z.z>d){let e=z.z-R.z,t=(z.z-d)/e;z.lerp(R,t)}R.applyMatrix4(r),z.applyMatrix4(r),R.multiplyScalar(1/R.w),z.multiplyScalar(1/z.w),R.x*=i.x/2,R.y*=i.y/2,z.x*=i.x/2,z.y*=i.y/2,U.start.copy(R),U.start.z=0,U.end.copy(z),U.end.z=0;let o=U.closestPointToPointParameter(V,!0);U.at(o,W);let u=s.lerp(R.z,z.z,o),f=u>=-1&&u<=1,p=V.distanceTo(W)<Y*.5;if(f&&p){U.start.fromBufferAttribute(c,t),U.end.fromBufferAttribute(l,t),U.start.applyMatrix4(a),U.end.applyMatrix4(a);let r=new _,i=new _;J.distanceSqToSegment(U.start,U.end,i,r),n.push({point:i,pointOnLine:r,distance:J.origin.distanceTo(i),object:e,face:null,faceIndex:t,uv:null,[k]:null})}}}var Z=class extends re{constructor(e=new M,t=new P({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type=`LineSegments2`}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let e=0,i=0,a=t.count;e<a;e++,i+=2)I.fromBufferAttribute(t,e),L.fromBufferAttribute(n,e),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+I.distanceTo(L);let i=new D(r,2,1);return e.setAttribute(`instanceDistanceStart`,new g(i,1,0)),e.setAttribute(`instanceDistanceEnd`,new g(i,1,1)),this}raycast(e,t){let n=this.material.worldUnits,r=e.camera;r===null&&!n&&console.error(`LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.`);let i=e.params.Line2===void 0?0:e.params.Line2.threshold||0;J=e.ray;let a=this.matrixWorld,o=this.geometry,s=this.material;Y=s.linewidth+i,o.boundingSphere===null&&o.computeBoundingSphere(),K.copy(o.boundingSphere).applyMatrix4(a);let c;if(c=n?Y*.5:X(r,Math.max(r.near,K.distanceToPoint(J.origin)),s.resolution),K.radius+=c,J.intersectsSphere(K)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),G.copy(o.boundingBox).applyMatrix4(a);let l;l=n?Y*.5:X(r,Math.max(r.near,G.distanceToPoint(J.origin)),s.resolution),G.expandByScalar(l),J.intersectsBox(G)!==!1&&(n?ae(this,t):oe(this,r,t))}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(F),this.material.uniforms.resolution.value.set(F.z,F.w))}},se=class extends Z{constructor(e=new N,t=new P({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type=`Line2`}},Q=e(n()),ce=Q.forwardRef(function({points:e,color:n=16777215,vertexColors:r,linewidth:i,lineWidth:a,segments:o,dashed:s,...c},l){var u;let f=te(e=>e.size),p=Q.useMemo(()=>o?new Z:new se,[o]),[m]=Q.useState(()=>new P),h=(r==null||(u=r[0])==null?void 0:u.length)===4?4:3,g=Q.useMemo(()=>{let t=o?new M:new N,i=e.map(e=>{let t=Array.isArray(e);return e instanceof _||e instanceof T?[e.x,e.y,e.z]:e instanceof v?[e.x,e.y,0]:t&&e.length===3?[e[0],e[1],e[2]]:t&&e.length===2?[e[0],e[1],0]:e});if(t.setPositions(i.flat()),r){n=16777215;let e=r.map(e=>e instanceof d?e.toArray():e);t.setColors(e.flat(),h)}return t},[e,o,r,h]);return Q.useLayoutEffect(()=>{p.computeLineDistances()},[e,p]),Q.useLayoutEffect(()=>{s?m.defines.USE_DASH=``:delete m.defines.USE_DASH,m.needsUpdate=!0},[s,m]),Q.useEffect(()=>()=>{g.dispose(),m.dispose()},[g]),Q.createElement(`primitive`,t({object:p,ref:l},c),Q.createElement(`primitive`,{object:g,attach:`geometry`}),Q.createElement(`primitive`,t({object:m,attach:`material`,color:n,vertexColors:!!r,resolution:[f.width,f.height],linewidth:i??a??1,dashed:s,transparent:h===4},c)))}),$=r();function le({points:e,color:t,testId:n}){let{store:r}=x();return!ie(r,e=>e.view.motionPaths)||e.length<2?null:(0,$.jsx)(ue,{points:e,color:t,name:n??`motion-path`})}function ue({points:e,color:t,name:n}){return(0,Q.useEffect)(()=>(i.overlays.motionPaths+=1,()=>{--i.overlays.motionPaths}),[]),(0,$.jsx)(ce,{points:e,color:t,lineWidth:2,dashed:!1,name:n})}var de=new _(0,1,0),fe=(0,Q.forwardRef)(function({color:e,scale:t,radius:n=.0016},r){let a=(0,Q.useRef)(null),s=(0,Q.useRef)(null),l=(0,Q.useRef)(null),u=(0,Q.useMemo)(()=>({shaftGeometry:new o(n,n,1,10),headGeometry:new f(n*2.6,n*7,14),material:new c({color:new d(e),depthTest:!1,transparent:!0}),quaternion:new S,dir:new _}),[e,n]);return(0,Q.useEffect)(()=>()=>{u.shaftGeometry.dispose(),u.headGeometry.dispose(),u.material.dispose()},[u]),(0,Q.useEffect)(()=>(i.overlays.forceArrows+=1,()=>{--i.overlays.forceArrows}),[]),(0,Q.useImperativeHandle)(r,()=>({set(e,r){let i=a.current;if(!i||!s.current||!l.current)return;let o=r.length()*t;if(i.visible=o>1e-5,!i.visible)return;u.dir.copy(r).normalize(),u.quaternion.setFromUnitVectors(de,u.dir),i.position.copy(e),i.quaternion.copy(u.quaternion);let c=n*7,d=Math.max(o-c,1e-4);s.current.scale.set(1,d,1),s.current.position.set(0,d/2,0),l.current.position.set(0,d+c/2,0)}}),[u,n,t]),(0,$.jsxs)(`group`,{ref:a,renderOrder:10,name:`force-arrow`,children:[(0,$.jsx)(`group`,{ref:s,children:(0,$.jsx)(`mesh`,{geometry:u.shaftGeometry,material:u.material,renderOrder:10})}),(0,$.jsx)(`group`,{ref:l,children:(0,$.jsx)(`mesh`,{geometry:u.headGeometry,material:u.material,renderOrder:10})})]})});function pe({pointAt:e,length:t,count:n,phaseOf:r,color:i,size:a=.0015}){let{store:o}=x(),s=(0,Q.useRef)(null),l=(0,Q.useMemo)(()=>({geometry:new w(a,8,6),material:new c({color:new d(i)}),dummy:new ee}),[i,a]);return(0,Q.useEffect)(()=>()=>{l.geometry.dispose(),l.material.dispose()},[l]),ne(()=>{let i=s.current;if(!i)return;let a=r(o.getState().driver);for(let r=0;r<n;r++){let o=e(a+r*t/n);l.dummy.position.set(o.x,o.y,o.z),l.dummy.updateMatrix(),i.setMatrixAt(r,l.dummy.matrix)}i.instanceMatrix.needsUpdate=!0}),(0,$.jsx)(`instancedMesh`,{ref:s,args:[l.geometry,l.material,n]})}export{fe as n,le as r,pe as t};